// Function to perform the Quick Sort algorithm
const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

// Function to convert a space-separated string of numbers into an array of numbers
const convertStringToArray = (input) => {
    return input.trim().split(' ').map(Number);
};

// Function to convert an array of numbers into a space-separated string
const convertArrayToString = (arr) => {
    return arr.join(' ');
};

// Main function to prompt user input, sort the array, and display the output
const main = () => {
    const input = prompt("Enter the numbers as a space-separated string:");
    const numbersArray = convertStringToArray(input);
    const sortedArray = quickSort(numbersArray);
    const output = convertArrayToString(sortedArray);

    console.log("Sorted array in descending order:", output);
};

// Call the main function
main();
