const findPairsWithSum = (arr, targetSum) => {
    const pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
};

// Test Case 1
const input1 = "2,4,6,8,10";
const sum1 = 12;
const arr1 = input1.split(",").map(Number);
console.log(findPairsWithSum(arr1, sum1)); // Output: [[2, 10], [4, 8]]

// Test Case 2
const input2 = "1,1,1,1,1";
const sum2 = 2;
const arr2 = input2.split(",").map(Number);
console.log(findPairsWithSum(arr2, sum2)); // Output: [[1, 1], [1, 1], [1, 1], [1, 1]]