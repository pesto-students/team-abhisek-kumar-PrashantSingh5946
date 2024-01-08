class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMax() {
        if (this.isEmpty()) return null;

        const max = this.heap[0];
        const last = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return max;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[currentIndex]) break;
            [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (currentIndex < this.heap.length) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            const largerChildIndex = this.getLargerChildIndex(leftChildIndex, rightChildIndex);

            if (largerChildIndex === null || this.heap[currentIndex] >= this.heap[largerChildIndex]) break;

            [this.heap[currentIndex], this.heap[largerChildIndex]] = [this.heap[largerChildIndex], this.heap[currentIndex]];
            currentIndex = largerChildIndex;
        }
    }

    getLargerChildIndex(leftChildIndex, rightChildIndex) {
        if (leftChildIndex >= this.heap.length) return null;
        if (rightChildIndex >= this.heap.length) return leftChildIndex;
        return this.heap[leftChildIndex] >= this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    extractMin() {
        if (this.isEmpty()) return null;

        const min = this.heap[0];
        const last = this.heap.pop();
        if (!this.isEmpty()) {
            this.heap[0] = last;
            this.heapifyDown();
        }
        return min;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[currentIndex]) break;
            [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (currentIndex < this.heap.length) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            const smallerChildIndex = this.getSmallerChildIndex(leftChildIndex, rightChildIndex);

            if (smallerChildIndex === null || this.heap[currentIndex] <= this.heap[smallerChildIndex]) break;

            [this.heap[currentIndex], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[currentIndex]];
            currentIndex = smallerChildIndex;
        }
    }

    getSmallerChildIndex(leftChildIndex, rightChildIndex) {
        if (leftChildIndex >= this.heap.length) return null;
        if (rightChildIndex >= this.heap.length) return leftChildIndex;
        return this.heap[leftChildIndex] <= this.heap[rightChildIndex] ? leftChildIndex : rightChildIndex;
    }
}

function findMedian(stream) {
    const maxHeap = new MaxHeap();
    const minHeap = new MinHeap();
    let median = null;

    stream.split(" ").forEach((strNum) => {
        const num = parseInt(strNum, 10);

        // Insert the number into the appropriate heap
        if (maxHeap.isEmpty() || num <= median) {
            maxHeap.insert(num);
        } else {
            minHeap.insert(num);
        }

        // Balance the heaps
        if (maxHeap.heap.length > minHeap.heap.length + 1) {
            const max = maxHeap.extractMax();
            minHeap.insert(max);
        } else if (minHeap.heap.length > maxHeap.heap.length) {
            const min = minHeap.extractMin();
            maxHeap.insert(min);
        }

        // Update the median
        if (maxHeap.heap.length === minHeap.heap.length) {
            median = (maxHeap.heap[0] + minHeap.heap[0]) / 2;
        } else {
            median = maxHeap.heap[0];
        }
    });

    return median;
}

// Test cases
const testCase1 = "5 10 2 8 15";
const testCase2 = "10 20 30 40 50";

console.log("Test Case 1 - Median:", findMedian(testCase1)); // Output: 8
console.log("Test Case 2 - Median:", findMedian(testCase2)); // Output: 30