function longestPalindromicSubsequence(str) {
    const n = str.length;
    const dp = Array.from(Array(n), () => Array(n).fill(0));

    // Base case: A single character is a palindrome of length 1.
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            const j = i + len - 1;
            if (str[i] === str[j] && len === 2) {
                dp[i][j] = 2;
            } else if (str[i] === str[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }

    return dp[0][n - 1];
}

// Prompt user for input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a string: ', (inputString) => {
    const result = longestPalindromicSubsequence(inputString);
    console.log(`The length of the longest palindromic subsequence is: ${result}`);
    readline.close();
});