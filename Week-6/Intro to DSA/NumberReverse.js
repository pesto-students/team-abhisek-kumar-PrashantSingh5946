// Function to reverse a number
const reverseNumber = (num) => {
    let reversedNum = 0;

    while (num !== 0) {
        const lastDigit = num % 10; // Extract the last digit of the number
        reversedNum = reversedNum * 10 + lastDigit; // Append the last digit to the reversed number
        num = Math.floor(num / 10); // Remove the last digit from the number
    }

    return reversedNum;
};

// Prompt the user to enter a number
const input = prompt("Enter a number:");

// Convert the input to a number (in case it's a string)
const number = parseInt(input);

// Reverse the number
const reversedNumber = reverseNumber(number);

// Display the reversed number
console.log("Reversed number:", reversedNumber);