// Function to count the elements in the array
function countElements(inputArray) {
    // Convert the comma-separated string to an array
    const elementsArray = inputArray.split(',');

    // Return the count of elements using the length property
    return elementsArray.length;
}

// Get input from the user
const input = prompt("Enter comma-separated numbers representing the elements of an array:");

// Call the function and display the output
const count = countElements(input);
console.log(count);