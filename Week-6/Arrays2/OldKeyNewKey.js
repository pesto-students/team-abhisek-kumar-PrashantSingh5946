function replaceKeyWithNewKey(arr, oldKey, newKey) {
    // Use a loop to iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Check if the current element is equal to oldKey, and if so, replace it with newKey
        if (arr[i] === oldKey) {
            arr[i] = newKey;
        }
    }

    // Return the modified array
    return arr;
}

// Input reading function
function getInput() {
    const inputArray = prompt("Enter the comma separated numbers representing the elements of the array:").split(',');
    const oldKey = prompt("Enter the number to be replaced:");
    const newKey = prompt("Enter the new number:");

    // Convert inputArray elements to numbers
    const parsedArray = inputArray.map(num => Number(num));

    // Call the function and print the output
    const resultArray = replaceKeyWithNewKey(parsedArray, Number(oldKey), Number(newKey));
    console.log(resultArray);
}

// Call the input reading function to get user input and display the result
getInput();