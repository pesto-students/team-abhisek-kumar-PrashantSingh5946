// Helper function to swap elements in the heap
const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// Function to perform heapify on the given heap
const heapify = (heap, i, heapSize) => {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < heapSize && heap[left][0] < heap[smallest][0]) {
        smallest = left;
    }

    if (right < heapSize && heap[right][0] < heap[smallest][0]) {
        smallest = right;
    }

    if (smallest !== i) {
        swap(heap, i, smallest);
        heapify(heap, smallest, heapSize);
    }
};

// Function to build a min heap from the given array
const buildMinHeap = (arr) => {
    const n = arr.length;
    const startIndex = Math.floor(n / 2) - 1;
    for (let i = startIndex; i >= 0; i--) {
        heapify(arr, i, n);
    }
};

// Function to merge k sorted arrays
const mergeKSortedArrays = (arrays) => {
    const k = arrays.length;
    const heap = [];

    // Push the first element from each array along with its array index and element index to the heap
    for (let i = 0; i < k; i++) {
        heap.push([arrays[i][0], i, 0]);
    }

    buildMinHeap(heap);

    const result = [];

    while (heap.length) {
        const [element, arrIndex, elementIndex] = heap[0];
        result.push(element);

        // Replace the extracted element with the next element from the same array
        if (elementIndex + 1 < arrays[arrIndex].length) {
            heap[0] = [arrays[arrIndex][elementIndex + 1], arrIndex, elementIndex + 1];
        } else {
            // If the array is exhausted, replace it with the last element in the heap and heapify
            heap[0] = heap[heap.length - 1];
            heap.pop();
        }

        // Restore the heap property by performing heapify
        heapify(heap, 0, heap.length);
    }

    return result;
};

// Main program
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the number of sorted arrays, k: ', (k) => {
    const arrays = [];
    let count = 0;

    const promptForArray = () => {
        rl.question(`Enter elements for array ${count + 1} separated by commas: `, (input) => {
            const arr = input.split(',').map(Number);
            arrays.push(arr);
            count++;

            if (count === k) {
                rl.close();
                const mergedArray = mergeKSortedArrays(arrays);
                console.log('Merged Sorted Array:', mergedArray);
            } else {
                promptForArray();
            }
        });
    };

    promptForArray();
});