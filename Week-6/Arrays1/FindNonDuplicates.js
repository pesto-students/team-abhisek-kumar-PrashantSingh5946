function findNonDuplicateElement(input) {
    const arr = input.split(' ').map(Number);

    // Initialize an empty object to keep track of the frequency of each element
    const frequency = {};

    // Iterate through the array and update the frequency of each element
    for (const num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    // Iterate through the array again and find the element that has a frequency of 1
    for (const num of arr) {
        if (frequency[num] === 1) {
            return num;
        }
    }
}

// Prompt the user to enter the array elements separated by spaces
const userInput = prompt("Enter the array elements separated by spaces:");

// Call the function and display the result
const result = findNonDuplicateElement(userInput);
console.log(result);