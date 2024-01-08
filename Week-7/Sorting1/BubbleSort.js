// Function to perform Bubble Sort
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no two elements were swapped in the inner loop, the array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

// Input prompt to get the numbers from the user
const input = prompt("Enter the numbers as a space-separated string:").trim();

// Convert the input string to an array of numbers
const numbersArray = input.split(" ").map(Number);

// Call the bubbleSort function to sort the array in ascending order
const sortedArray = bubbleSort(numbersArray);

// Output the sorted array as a space-separated string
console.log(sortedArray.join(" "));