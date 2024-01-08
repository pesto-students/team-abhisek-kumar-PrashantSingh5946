// Function to check if the number is even or odd
const checkOddEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

// Prompt the user to enter a number
const userInput = prompt("Enter a number:");

// Convert the user input to a number
const number = parseInt(userInput);

// Check if the input is a valid number
if (isNaN(number)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    // Call the function to check if the number is even or odd
    const result = checkOddEven(number);
    console.log(result);
}