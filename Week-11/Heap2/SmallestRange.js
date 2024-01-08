// Function to take input for a single list and return an array of integers
const readList = () => {
    const input = prompt("Enter the elements of the list separated by spaces:");
    return input.split(" ").map(Number);
};

// Function to take input for k sorted lists and return an array of lists
const readLists = (k) => {
    const lists = [];
    for (let i = 0; i < k; i++) {
        const list = readList();
        lists.push(list);
    }
    return lists;
};

// Function to find the smallest range that includes at least one element from each list
const smallestRange = (lists) => {
    const k = lists.length;
    const pointers = new Array(k).fill(0);
    const maxValHeap = new MinHeap(); // MinHeap to track the maximum value among the current pointers
    let minRange = Infinity;
    let result = [];

    // Initialize maxValHeap with the first elements of all lists
    for (let i = 0; i < k; i++) {
        maxValHeap.insert({ value: lists[i][0], listIndex: i });
    }

    let elementsCovered = 0;
    let allListsCovered = false;

    // Loop until all lists have been covered
    while (!allListsCovered) {
        const maxValNode = maxValHeap.extractMin(); // Node with the maximum value
        const { value, listIndex } = maxValNode;
        pointers[listIndex]++; // Move the pointer of the list with the maximum value
        elementsCovered++; // Update the elements covered count

        // Check if all lists have been covered
        if (elementsCovered === k) {
            // Find the minimum and maximum values among the current pointers
            const minValue = Math.min(...pointers.map((index, i) => lists[i][index]));
            const maxValue = Math.max(...pointers.map((index, i) => lists[i][index]));
            const currentRange = maxValue - minValue + 1; // Calculate the current range

            // Update the minimum range if necessary
            if (currentRange < minRange) {
                minRange = currentRange;
                result = [minValue, maxValue];
            }

            // Move the pointers back to the previous position for all lists
            for (let i = 0; i < k; i++) {
                pointers[i]--;
            }

            elementsCovered = 0; // Reset the elements covered count
            maxValHeap.clear(); // Clear the maxValHeap to track the maximum value again

            // Check if any list is exhausted
            if (pointers.some((index, i) => index === lists[i].length - 1)) {
                allListsCovered = true;
            }

            // Reinitialize maxValHeap with the next elements from lists
            for (let i = 0; i < k; i++) {
                if (pointers[i] < lists[i].length - 1) {
                    maxValHeap.insert({ value: lists[i][pointers[i] + 1], listIndex: i });
                }
            }
        }
    }

    return result;
};

// Class representing a Min Heap
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp();
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null;
        }

        const minNode = this.heap[0];
        const lastNode = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastNode;
            this.bubbleDown();
        }

        return minNode;
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        const node = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (node.value >= parent.value) {
                break;
            }

            this.heap[parentIndex] = node;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        const node = this.heap[index];
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swapIndex = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.value < node.value) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (!swapIndex && rightChild.value < node.value) ||
                    (swapIndex && rightChild.value < leftChild.value)
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (!swapIndex) {
                break;
            }

            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = node;
            index = swapIndex;
        }
    }

    clear() {
        this.heap = [];
    }
}

// Main function to execute the program
const main = () => {
    const k = parseInt(prompt("Enter the number of lists (k):"), 10);
    const lists = readLists(k);
    const result = smallestRange(lists);
    console.log(`Smallest Range: ${result[0]} - ${result[1]}`);
};

main();