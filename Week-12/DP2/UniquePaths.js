// Function to find the number of unique paths
function uniquePaths(m, n) {
    // Create a dynamic programming array to store the results
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    // Initialize the base cases: There is only one way to reach any cell in the first row or first column
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }

    // Fill the rest of the array using dynamic programming
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    // Return the number of unique paths to reach the bottom-right corner
    return dp[m - 1][n - 1];
}

// Read input from the user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter the number of rows: ', (m) => {
    readline.question('Enter the number of columns: ', (n) => {
        // Parse the inputs into integers
        m = parseInt(m);
        n = parseInt(n);

        // Calculate and print the number of unique paths
        const result = uniquePaths(m, n);
        console.log('Number of unique paths:', result);

        readline.close();
    });
});