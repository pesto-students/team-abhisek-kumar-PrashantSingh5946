// Function to rearrange the queue with even numbers at the front
const rearrangeQueue = (input) => {
    const evenQueue = [];
    const oddQueue = [];

    // Convert the input string to an array of integers representing the initial queue
    const initialQueue = input.split(' ').map(Number);

    // Iterate through the initial queue and enqueue each element into the appropriate queue
    initialQueue.forEach((num) => {
        if (num % 2 === 0) {
            evenQueue.push(num); // Enqueue even number to evenQueue
        } else {
            oddQueue.push(num); // Enqueue odd number to oddQueue
        }
    });

    // Concatenate evenQueue with oddQueue to get the rearranged queue
    const rearrangedQueue = evenQueue.concat(oddQueue);
    return rearrangedQueue;
};

// Test Cases
console.log(rearrangeQueue('5 2 8 3 9 4')); // Output: [2, 8, 5, 3, 9, 4]
console.log(rearrangeQueue('2 4 6 8 10')); // Output: [2, 4, 6, 8, 10]