// Function to calculate the number of distinct ways to reach the top step
const climbStairs = (n) => {
    // Base cases
    if (n === 1) return 1;
    if (n === 2) return 2;

    // Create a dynamic programming array to store the results
    const dp = new Array(n + 1);

    // Initialize base cases
    dp[1] = 1;
    dp[2] = 2;

    // Fill the rest of the array using dynamic programming
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // Return the number of distinct ways to reach the top step
    return dp[n];
};

// Main program
const inputSteps = prompt("Enter the number of steps:");
const numberOfSteps = parseInt(inputSteps);

if (isNaN(numberOfSteps) || numberOfSteps < 1) {
    console.log("Invalid input. Please enter a positive integer.");
} else {
    const distinctWays = climbStairs(numberOfSteps);
    console.log(`Number of distinct ways to reach the top step: ${distinctWays}`);
}