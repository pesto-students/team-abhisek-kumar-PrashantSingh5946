function countingSort(input) {
    // Convert the comma-separated string of positive integers into an array of numbers
    const arr = input.split(',').map(Number);

    // Find the maximum element in the array to determine the range of counting
    const maxElement = Math.max(...arr);

    // Create a counting array to store the count of each element
    const countingArray = new Array(maxElement + 1).fill(0);

    // Traverse the input array and update the counting array with the count of each element
    for (let num of arr) {
        countingArray[num]++;
    }

    // Modify the counting array to store the cumulative count
    for (let i = 1; i < countingArray.length; i++) {
        countingArray[i] += countingArray[i - 1];
    }

    // Create a sorted array of the same length as the input array
    const sortedArray = new Array(arr.length);

    // Traverse the input array from right to left and place each element at its correct position in the sorted array
    for (let i = arr.length - 1; i >= 0; i--) {
        const num = arr[i];
        const index = countingArray[num] - 1;
        sortedArray[index] = num;
        countingArray[num]--;
    }

    // Return the sorted array
    return sortedArray;
}

// Prompt the user to enter the positive integers as a comma-separated string
const input = prompt("Enter the positive integers as a comma-separated string:");

// Call the countingSort function and print the output
const sortedArray = countingSort(input);
sortedArray.forEach(num => console.log(num));