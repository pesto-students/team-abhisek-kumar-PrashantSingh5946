// Function to delete elements from the array which are divisible by 2 and 3
const deleteDivisibleByTwoAndThree = (arr) => {
    // Use the filter method to create a new array with elements not divisible by 2 and 3
    const filteredArray = arr.filter((num) => num % 2 !== 0 && num % 3 !== 0);
    return filteredArray;
};

// Main function to take input and call the deleteDivisibleByTwoAndThree function
const main = () => {
    // Take input from the user and split it into an array of numbers
    const input = prompt("Enter comma-separated numbers representing the elements of an array:");
    const arr = input.split(",").map((num) => parseInt(num.trim()));

    // Call the deleteDivisibleByTwoAndThree function
    const resultArray = deleteDivisibleByTwoAndThree(arr);

    // Print the output as an array
    console.log(resultArray);
};

// Call the main function
main();