function parseInput(input) {
    return input.trim().split(',').map(row => row.split(' ').map(Number));
}

function minCostToPaintHouses(costs) {
    const n = costs.length;

    if (n === 0) {
        return 0;
    }

    const dp = Array.from({ length: n }, () => [0, 0, 0]);
    dp[0] = costs[0];

    for (let i = 1; i < n; i++) {
        dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
        dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
        dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
    }

    return Math.min(...dp[n - 1]);
}

// Test cases
const input1 = "17 2 17, 16 16 5, 14 3 19";
const input2 = "1 2 3, 4 5 6, 7 8 9, 10 11 12";

const costs1 = parseInput(input1);
const costs2 = parseInput(input2);

const result1 = minCostToPaintHouses(costs1);
const result2 = minCostToPaintHouses(costs2);

console.log("Sample Output 1:", result1); // Output: 10
console.log("Sample Output 2:", result2); // Output: 20