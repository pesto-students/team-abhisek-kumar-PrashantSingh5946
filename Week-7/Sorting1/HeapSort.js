// Function to perform Heapify to maintain max-heap property
function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left].length > arr[largest].length) {
        largest = left;
    }

    if (right < n && arr[right].length > arr[largest].length) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Function to perform Heap Sort
function heapSort(arr) {
    const n = arr.length;

    // Build max-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from the heap in descending order
    for (let i = n - 1; i >= 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
}

// Input
const input = prompt("Enter the strings as a comma-separated string: ");
const stringsArray = input.split(',');

// Sorting the array of strings in descending order of length
const sortedArray = heapSort(stringsArray);

// Output
sortedArray.reverse().forEach((str) => console.log(str));