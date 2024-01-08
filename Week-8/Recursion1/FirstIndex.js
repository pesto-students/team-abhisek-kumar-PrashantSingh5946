const firstIndexOfOccurrence = (arr, target, currentIndex = 0) => {
    if (currentIndex === arr.length) {
        return -1; // Target value not found in the array
    }

    if (arr[currentIndex] === target) {
        return currentIndex; // Target value found at the current index
    }

    // Make a recursive call on the remaining subarray, starting from the next index
    return firstIndexOfOccurrence(arr, target, currentIndex + 1);
};

// Helper function to parse input string into an array of integers
const parseInput = (inputString) => {
    return inputString.split(" ").map(Number);
};

// Test cases
const testCases = [
    { input: "1 2 3 4 5 5", output: 2 },
    { input: "2 4 6 8 10 5", output: -1 },
];

testCases.forEach((testCase) => {
    const arr = parseInput(testCase.input);
    const target = arr.pop(); // Remove the last element (target value) from the array
    const result = firstIndexOfOccurrence(arr, target);
    console.log(
        `Input: [${arr}], Target: ${target}, Output: ${result}, Expected Output: ${testCase.output}`
    );
});