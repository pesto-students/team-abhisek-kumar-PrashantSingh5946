function canPartition(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);

    if (sum % 2 !== 0) {
        return false; // If total sum is odd, it cannot be divided into two equal subsets
    }

    const targetSum = sum / 2;
    const dp = new Array(targetSum + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        for (let i = targetSum; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[targetSum];
}

// Helper function to convert space-separated string input to an array of integers
function parseInput(input) {
    return input.trim().split(' ').map(Number);
}

// Main function
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the set of positive integers (space-separated): ', (input) => {
        const nums = parseInput(input);
        const result = canPartition(nums);
        console.log('Output:', result);
        rl.close();
    });
}

main();