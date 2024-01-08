// Function to calculate the nth Fibonacci number using dynamic programming
const nthFibonacci = (n) => {
    if (n <= 0) return 0;

    // Create an array to store Fibonacci numbers
    const fib = new Array(n + 1);

    // Base cases
    fib[0] = 0;
    fib[1] = 1;

    // Calculate Fibonacci numbers from the bottom-up approach
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    // Return the nth Fibonacci number
    return fib[n];
};

// Prompting user for input
const userInput = parseInt(prompt("Enter an integer value for n:"));

// Calculate the nth Fibonacci number
const result = nthFibonacci(userInput);

// Print the result
console.log(`The ${userInput}th Fibonacci number is: ${result}`);