// Function to build a min heap
function buildMinHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

// Function to perform heapify down
function heapify(arr, n, i) {
    let smallest = i;
    const leftChild = 2 * i + 1;
    const rightChild = 2 * i + 2;

    if (leftChild < n && arr[leftChild] < arr[smallest]) {
        smallest = leftChild;
    }

    if (rightChild < n && arr[rightChild] < arr[smallest]) {
        smallest = rightChild;
    }

    if (smallest !== i) {
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        heapify(arr, n, smallest);
    }
}

// Function to find the kth largest element
function findKthLargest(nums, k) {
    const kthLargestHeap = nums.slice(0, k); // Create a min heap of the first k elements
    buildMinHeap(kthLargestHeap);

    for (let i = k; i < nums.length; i++) {
        if (nums[i] > kthLargestHeap[0]) {
            kthLargestHeap[0] = nums[i];
            heapify(kthLargestHeap, k, 0);
        }
    }

    return kthLargestHeap[0];
}

// Main function to take input and call findKthLargest function
function main() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the elements of the array separated by commas: ', (inputArray) => {
        const nums = inputArray.split(',').map(Number);

        rl.question('Enter the value of k: ', (k) => {
            const kthLargest = findKthLargest(nums, k);
            console.log(`The ${k}th largest element is: ${kthLargest}`);
            rl.close();
        });
    });
}

main();