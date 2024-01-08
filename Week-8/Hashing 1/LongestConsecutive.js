function findLongestConsecutiveSubsequence(arr) {
    // Convert the user input string of space-separated numbers into an array of integers
    const nums = arr.split(" ").map(Number);

    // Initialize a set and add all the elements from the array to the set
    const numsSet = new Set(nums);

    // Initialize a variable to store the maximum length encountered so far
    let maxLength = 0;

    // Iterate through the array
    for (const num of nums) {
        // Check if num-1 exists in the numsSet
        if (!numsSet.has(num - 1)) {
            // If num-1 does not exist, it means num is the start of a subsequence
            let length = 1;
            let currentNum = num + 1;

            // While currentNum exists in the numsSet, increment length and currentNum
            while (numsSet.has(currentNum)) {
                length++;
                currentNum++;
            }

            // Update maxLength to the maximum value between maxLength and length
            maxLength = Math.max(maxLength, length);
        }
    }

    // Return the maxLength
    return maxLength;
}

// Take input from the user
const input = prompt("Enter the array elements separated by spaces:");
const longestConsecutiveSubsequenceLength = findLongestConsecutiveSubsequence(input);

// Output the result
console.log("Length of the longest consecutive subsequence:", longestConsecutiveSubsequenceLength);