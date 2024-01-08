function findMinimumElement(minHeap) {
    // The minimum element in a min heap is always at the root (index 0).
    return minHeap[0];
}

// Test Case 1
const testCase1 = [3, 8, 10, 15, 20];
console.log("Test Case 1 Output:", findMinimumElement(testCase1));

// Test Case 2
const testCase2 = [1, 2, 3, 4, 5];
console.log("Test Case 2 Output:", findMinimumElement(testCase2));