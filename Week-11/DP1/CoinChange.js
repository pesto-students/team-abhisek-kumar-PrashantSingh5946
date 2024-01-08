// Function to find the minimum number of coins required to make the change
function coinChange(coins, target) {
    const dp = new Array(target + 1).fill(Infinity);
    dp[0] = 0;

    for (let amount = 1; amount <= target; amount++) {
        for (const coin of coins) {
            if (coin <= amount) {
                dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1);
            }
        }
    }

    return dp[target] !== Infinity ? dp[target] : -1;
}

// Function to take user input and run the program
function main() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Enter the coin denominations (space-separated integers): ', (coinsInput) => {
        const coins = coinsInput.split(' ').map(Number);

        readline.question('Enter the target amount: ', (targetInput) => {
            const target = parseInt(targetInput, 10);

            const result = coinChange(coins, target);

            console.log(`Minimum number of coins required: ${result}`);
            readline.close();
        });
    });
}

// Run the program
main();