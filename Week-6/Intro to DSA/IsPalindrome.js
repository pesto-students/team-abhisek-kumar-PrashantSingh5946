// Function to check if a number is a palindrome
const isPalindrome = (num) => {
    let originalNumber = num;
    let reversedNumber = 0;

    while (num > 0) {
        const lastDigit = num % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    return originalNumber === reversedNumber;
};

// Get user input
const userInput = parseInt(prompt("Enter a number:"));

// Check if the number is a palindrome
const result = isPalindrome(userInput);

// Display the result
const output = result ? "Yes" : "No";
console.log(output);