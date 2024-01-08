class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(element) {
        this.heap.push(element);
        this.heapifyUp();
    }

    extractMin() {
        const min = this.heap[0];
        const lastElement = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = lastElement;
            this.heapifyDown();
        }
        return min;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].value > this.heap[index].value) {
                this.swap(parentIndex, index);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (
                leftChildIndex < length &&
                this.heap[leftChildIndex].value < this.heap[smallest].value
            ) {
                smallest = leftChildIndex;
            }

            if (
                rightChildIndex < length &&
                this.heap[rightChildIndex].value < this.heap[smallest].value
            ) {
                smallest = rightChildIndex;
            }

            if (smallest !== index) {
                this.swap(smallest, index);
                index = smallest;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

function findKthSmallest(matrix, k) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const minHeap = new MinHeap();

    for (let i = 0; i < rows; i++) {
        minHeap.insert({
            value: matrix[i][0],
            row: i,
            col: 0,
        });
    }

    for (let i = 0; i < k - 1; i++) {
        const root = minHeap.extractMin();
        const { row, col } = root;

        if (col < cols - 1) {
            minHeap.insert({
                value: matrix[row][col + 1],
                row: row,
                col: col + 1,
            });
        }
    }

    return minHeap.extractMin().value;
}

// Main function to take input from the user and print output
function main() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Enter the number of rows: ", (rows) => {
        readline.question("Enter the number of columns: ", (cols) => {
            const matrix = [];

            for (let i = 0; i < rows; i++) {
                readline.question(`Enter elements for row ${i + 1} (comma-separated): `, (rowInput) => {
                    const rowElements = rowInput.split(",").map(Number);
                    matrix.push(rowElements);

                    if (matrix.length === rows) {
                        readline.question("Enter the value of k: ", (k) => {
                            const kthSmallest = findKthSmallest(matrix, k);
                            console.log(`The ${k}th smallest element is: ${kthSmallest}`);
                            readline.close();
                        });
                    }
                });
            }
        });
    });
}

main();