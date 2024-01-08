// Function to check if the string can be segmented into dictionary words
function wordBreak(s, wordDict) {
    const n = s.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true;

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            const word = s.slice(j, i);
            if (dp[j] && wordDict.includes(word)) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}

// Main function to take user input and test the wordBreak function
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter the string: ', (s) => {
        rl.question('Enter the dictionary words (space-separated): ', (wordDictStr) => {
            const wordDict = wordDictStr.split(' ');
            const result = wordBreak(s, wordDict);
            console.log('Output:', result);
            rl.close();
        });
    });
}

// Call the main function to start the program
main();