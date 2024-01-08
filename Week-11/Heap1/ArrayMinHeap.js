// Function to check if the array represents a min heap
const isMinHeap = (arr) => {
    const n = arr.length;

    // Start from the first non-leaf node
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        const leftChild = 2 * i + 1;
        const rightChild = 2 * i + 2;

        // Compare parent node with left child
        if (leftChild < n && arr[i] > arr[leftChild]) {
            return false;
        }

        // Compare parent node with right child
        if (rightChild < n && arr[i] > arr[rightChild]) {
            return false;
        }
    }

    return true;
};

// Test Cases
const test1 = [5, 10, 15, 20, 25];
console.log(isMinHeap(test1)); // Output: true

const test2 = [20, 10, 25, 5, 15];
console.log(isMinHeap(test2)); // Output: false