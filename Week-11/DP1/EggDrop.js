function eggDrop(eggs, floors) {
    // Create a dynamic programming matrix dp to store the results
    const dp = Array.from({ length: eggs + 1 }, () => Array(floors + 1).fill(0));

    // Base cases
    // If there are no floors, no attempts are needed
    for (let i = 1; i <= eggs; i++) {
        dp[i][0] = 0;
    }

    // If there is only one floor, one attempt is needed
    for (let j = 1; j <= floors; j++) {
        dp[1][j] = j;
    }

    // Fill the rest of the matrix using dynamic programming
    for (let i = 2; i <= eggs; i++) {
        for (let j = 1; j <= floors; j++) {
            dp[i][j] = Infinity;
            // Iterate through all possible floors to drop the egg
            for (let k = 1; k <= j; k++) {
                // Calculate the number of attempts needed if the egg breaks or doesn't break
                const attemptsIfEggBreaks = dp[i - 1][k - 1];
                const attemptsIfEggSurvives = dp[i][j - k];
                // Determine the maximum attempts needed among these two possibilities
                const maxAttempts = Math.max(attemptsIfEggBreaks, attemptsIfEggSurvives);
                // Take the minimum of these maximum attempts and assign it to dp[i][j]
                dp[i][j] = Math.min(dp[i][j], maxAttempts + 1);
            }
        }
    }

    // Return dp[eggs][floors], which contains the minimum number of attempts
    return dp[eggs][floors];
}

// Test cases
console.log(eggDrop(2, 10)); // Output: 4
console.log(eggDrop(3, 14)); // Output: 4