function reconstructQueue(people) {
    // Sort the people array in descending order based on heights.
    // If two people have the same height, sort them based on the number of people in front in ascending order.
    people.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        } else {
            return a[1] - b[1];
        }
    });

    const reconstructedQueue = [];

    // Iterate over each person in the sorted people array.
    // Insert the person at the specified index based on the number of people in front into the reconstructedQueue.
    for (const person of people) {
        reconstructedQueue.splice(person[1], 0, person);
    }

    return reconstructedQueue;
}

// Sample input and output tests
const sampleInput1 = "7 0 4 4 5 0 6 1 5 2 9";
const input1 = sampleInput1.split(" ").map(Number);
const reconstructedQueue1 = reconstructQueue(chunkArray(input1, 2));
console.log(reconstructedQueue1.map(pair => pair.join(" ")).join(" "));

const sampleInput2 = "6 0 5 0 4 0 5";
const input2 = sampleInput2.split(" ").map(Number);
const reconstructedQueue2 = reconstructQueue(chunkArray(input2, 2));
console.log(reconstructedQueue2.map(pair => pair.join(" ")).join(" "));

// Helper function to convert the input array into chunks of pairs.
function chunkArray(arr, size) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
}