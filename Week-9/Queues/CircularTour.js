function findCircularTour(petrolPumps) {
    const totalPumps = petrolPumps.length;
    let start = 0;
    let remainingPetrol = 0;
    let totalPetrol = 0;

    for (let i = 0; i < totalPumps; i++) {
        const petrol = petrolPumps[i][0];
        const distance = petrolPumps[i][1];

        totalPetrol += petrol - distance;
        remainingPetrol += petrol - distance;

        if (remainingPetrol < 0) {
            start = i + 1;
            remainingPetrol = 0;
        }
    }

    return totalPetrol >= 0 ? start : -1;
}

// Get input from the user and format it as per the problem statement
function getInputFromUser() {
    const input = prompt("Enter the number of petrol pumps and the petrol and distance values separated by space:");
    const values = input.split(" ").map(Number);
    const petrolPumps = [];

    for (let i = 0; i < values.length; i += 2) {
        petrolPumps.push([values[i], values[i + 1]]);
    }

    return petrolPumps;
}

// Main function
function main() {
    const petrolPumps = getInputFromUser();
    const result = findCircularTour(petrolPumps);

    if (result !== -1) {
        console.log(`The first petrol pump to start the circular tour is at index ${result}.`);
    } else {
        console.log("It is impossible to complete the circular tour.");
    }
}

// Call the main function to start the program
main();