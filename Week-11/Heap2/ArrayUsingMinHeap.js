// Function to build a min heap
function buildMinHeap(array) {
    const n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }
}

// Function to perform heapify operation on the heap
function heapify(array, n, i) {
    let smallest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && array[left] < array[smallest]) {
        smallest = left;
    }

    if (right < n && array[right] < array[smallest]) {
        smallest = right;
    }

    if (smallest !== i) {
        // Swap the elements at indices i and smallest
        [array[i], array[smallest]] = [array[smallest], array[i]];
        heapify(array, n, smallest);
    }
}

// Function to sort the array using min heap
function sortArray(array) {
    buildMinHeap(array);
    const sortedArray = [];
    while (array.length > 0) {
        // Extract the minimum element and place it at the end of the array
        sortedArray.push(array.shift());
        // Rebuild the min heap
        buildMinHeap(array);
    }
    return sortedArray;
}

// Prompt user to enter the elements of the array
const input = prompt("Enter the elements of the array, separated by spaces: ");
const arr = input.split(" ").map(Number);

// Sort the array using min heap
const sortedArr = sortArray(arr);

// Print the sorted array
console.log(sortedArr.join(" "));