// Function to reverse the queue using a stack
function reverseQueue(input) {
    // Convert the input string into an array of integers
    const queue = input.split(' ').map(Number);

    // Create an empty stack and an empty queue
    const stack = [];
    const reversedQueue = [];

    // Enqueue all elements of the input array into the queue
    for (const element of queue) {
        reversedQueue.push(element);
    }

    // While the queue is not empty, dequeue an element and push it onto the stack
    while (reversedQueue.length > 0) {
        stack.push(reversedQueue.shift());
    }

    // While the stack is not empty, pop an element and enqueue it back into the queue
    while (stack.length > 0) {
        reversedQueue.push(stack.pop());
    }

    // Print the reversed queue
    console.log(reversedQueue.join(' '));
}

// Test Case 1
console.log("Test Case 1:");
reverseQueue("1 2 3 4 5");

// Test Case 2
console.log("Test Case 2:");
reverseQueue("10 20 30 40 50");