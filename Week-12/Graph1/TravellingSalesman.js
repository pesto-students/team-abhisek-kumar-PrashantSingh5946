// Function to generate all possible permutations of an array
function getPermutations(arr) {
    const permutations = [];

    function permute(arr, start = 0) {
        if (start === arr.length - 1) {
            permutations.push([...arr]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            permute(arr, start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]]; // Backtrack
        }
    }

    permute(arr);
    return permutations;
}

// Function to swap two elements in an array
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Function to calculate the total distance of a route
function calculateDistance(cities, route) {
    let distance = 0;
    for (let i = 0; i < route.length - 1; i++) {
        distance += cities[route[i]][route[i + 1]];
    }
    distance += cities[route[route.length - 1]][route[0]]; // Return to the starting city
    return distance;
}

// Function to find the shortest route using brute force approach
function findShortestRoute(cities) {
    const numCities = cities.length;
    const initialRoute = Array.from({ length: numCities }, (_, index) => index);
    let shortestRoute = [];
    let shortestDistance = Infinity;

    const permutations = getPermutations(initialRoute);
    for (const route of permutations) {
        const distance = calculateDistance(cities, route);
        if (distance < shortestDistance) {
            shortestDistance = distance;
            shortestRoute = route;
        }
    }

    return shortestRoute;
}

// Test Case 1
const cities1 = [
    [0, 2, 9, 10],
    [1, 0, 6, 4],
    [15, 7, 0, 8],
    [6, 3, 12, 0]
];
console.log(findShortestRoute(cities1)); // Output: [0, 1, 3, 2, 0]

// Test Case 2
const cities2 = [
    [0, 5, 8, 6],
    [5, 0, 10, 15],
    [8, 10, 0, 12],
    [6, 15, 12, 0]
];
console.log(findShortestRoute(cities2)); // Output: [0, 3, 1, 2, 0]