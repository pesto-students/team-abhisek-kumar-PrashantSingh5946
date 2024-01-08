function reverseKElements(queue, K) {
    const stack = [];
    const modifiedQueue = [];

    // Dequeue the first K elements and push them onto the stack
    for (let i = 0; i < K; i++) {
        stack.push(queue.shift());
    }

    // Pop elements from the stack and enqueue them back into the modifiedQueue
    while (stack.length > 0) {
        modifiedQueue.push(stack.pop());
    }

    // Enqueue the remaining elements from the original queue back into the modifiedQueue
    while (queue.length > 0) {
        modifiedQueue.push(queue.shift());
    }

    return modifiedQueue;
}

// Test Case 1
const queue1 = [1, 2, 3, 4, 5, 6, 7];
const K1 = 3;
console.log(reverseKElements(queue1, K1).join(' ')); // Output: 3 2 1 4 5 6 7

// Test Case 2
const queue2 = [10, 20, 30, 40, 50];
const K2 = 2;
console.log(reverseKElements(queue2, K2).join(' ')); // Output: 20 10 30 40 50