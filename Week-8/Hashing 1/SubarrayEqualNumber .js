function findLongestSubarrayWithEqualZerosAndOnes(input) {
    // Convert input string to an array of integers
    const arr = input.split(' ').map(Number);

    // Initialize variables
    const diffMap = new Map();
    let maxLen = 0;
    let diff = 0;

    for (let i = 0; i < arr.length; i++) {
        // Update diff based on the current element
        diff += arr[i] === 0 ? -1 : 1;

        if (diff === 0) {
            // If diff is 0, update maxLen to the current index + 1
            maxLen = i + 1;
        } else if (diffMap.has(diff)) {
            // If diff is already present in diffMap, update maxLen
            maxLen = Math.max(maxLen, i - diffMap.get(diff));
        } else {
            // If diff is not present in diffMap, store it with the current index as value
            diffMap.set(diff, i);
        }
    }

    return maxLen;
}

// Get input from the user
const userInput = prompt('Enter the array elements separated by spaces:');
const result = findLongestSubarrayWithEqualZerosAndOnes(userInput);
console.log('Output:', result);