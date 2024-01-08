function fourSum(nums, target) {
    const result = [];
    const sumPairs = {};

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            const complement = target - sum;
            if (sumPairs.hasOwnProperty(complement)) {
                for (const pair of sumPairs[complement]) {
                    const quadruplet = [...pair, nums[i], nums[j]];
                    quadruplet.sort((a, b) => a - b);
                    result.push(quadruplet);
                }
            }
            if (!sumPairs.hasOwnProperty(sum)) {
                sumPairs[sum] = [];
            }
            sumPairs[sum].push([nums[i], nums[j]]);
        }
    }

    const uniqueQuadruplets = new Set(result.map(JSON.stringify));
    return Array.from(uniqueQuadruplets).map(JSON.parse);
}

// Test cases
const testCase1Input = [1, 0, -1, 0, -2, 2];
const testCase1Target = 0;
console.log(fourSum(testCase1Input, testCase1Target)); // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

const testCase2Input = [2, 2, 2, 2, 2];
const testCase2Target = 8;
console.log(fourSum(testCase2Input, testCase2Target)); // Output: [[2, 2, 2, 2]]