const arraySumRecursive = (arr) => {
    // Base case: If the array is empty, return 0
    if (arr.length === 0) {
        return 0;
    } else {
        // Extract the first element and add it to the sum of the rest of the array
        return arr[0] + arraySumRecursive(arr.slice(1));
    }
};

// Test cases
// Test case 1
const arr1 = [1, 2, 3, 4, 5];
console.log("Sample Input 1:", arr1);
console.log("Sample Output 1:", arraySumRecursive(arr1));

// Test case 2
const arr2 = [0, 0, 0, 0, 0];
console.log("Sample Input 2:", arr2);
console.log("Sample Output 2:", arraySumRecursive(arr2));