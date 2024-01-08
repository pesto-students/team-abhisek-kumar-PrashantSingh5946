// MaxHeap class to maintain the k closest points based on their distance
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(point) {
        this.heap.push(point);
        this.bubbleUp(this.heap.length - 1);
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(index, parentIndex) > 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;

        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.bubbleDown(0);
        }
        return max;
    }

    bubbleDown(index) {
        const length = this.heap.length;
        while (index < length) {
            const leftIndex = 2 * index + 1;
            const rightIndex = 2 * index + 2;
            let maxIndex = index;

            if (leftIndex < length && this.compare(leftIndex, maxIndex) > 0) {
                maxIndex = leftIndex;
            }

            if (rightIndex < length && this.compare(rightIndex, maxIndex) > 0) {
                maxIndex = rightIndex;
            }

            if (maxIndex !== index) {
                this.swap(index, maxIndex);
                index = maxIndex;
            } else {
                break;
            }
        }
    }

    compare(i, j) {
        const distance_i = this.calculateDistance(this.heap[i]);
        const distance_j = this.calculateDistance(this.heap[j]);
        return distance_i - distance_j;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    calculateDistance(point) {
        const [x, y] = point;
        return Math.sqrt(x * x + y * y);
    }
}

function findClosestPoints(points, k) {
    const maxHeap = new MaxHeap();

    for (const point of points) {
        if (maxHeap.heap.length < k) {
            maxHeap.insert(point);
        } else {
            const maxDistance = maxHeap.calculateDistance(maxHeap.heap[0]);
            const currentDistance = maxHeap.calculateDistance(point);
            if (currentDistance < maxDistance) {
                maxHeap.extractMax();
                maxHeap.insert(point);
            }
        }
    }

    const closestPoints = [];
    while (maxHeap.heap.length > 0) {
        const point = maxHeap.extractMax();
        closestPoints.unshift(point);
    }

    return closestPoints;
}

// Main program

// Read input from the user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Enter the value of k: ', (k) => {
    k = parseInt(k, 10);

    readline.question('Enter the points as x,y coordinates, separated by spaces: ', (input) => {
        const pointsArray = input.split(' ').map((point) => point.split(',').map(Number));
        const closestPoints = findClosestPoints(pointsArray, k);

        console.log('K Closest Points to the Origin:');
        closestPoints.forEach((point) => console.log(point.join(',')));

        readline.close();
    });
});