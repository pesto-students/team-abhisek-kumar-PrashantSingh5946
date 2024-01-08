// Function to perform Bucket Sort
function bucketSort(inputArr) {
    // Separate even and odd numbers into their respective buckets
    const evenBucket = [];
    const oddBucket = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] % 2 === 0) {
            evenBucket.push(inputArr[i]);
        } else {
            oddBucket.push(inputArr[i]);
        }
    }

    // Sort the numbers in each bucket (using insertion sort for simplicity)
    const insertionSort = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            let j = i;
            while (j > 0 && arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                j--;
            }
        }
        return arr;
    };

    const sortedEven = insertionSort(evenBucket);
    const sortedOdd = insertionSort(oddBucket);

    // Concatenate the sorted even and odd buckets to get the final sorted array
    return sortedEven.concat(sortedOdd);
}

// Main function to take user input and test the Bucket Sort
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter numbers separated by spaces: ', (input) => {
        const inputArr = input.split(' ').map(Number);
        const sortedArray = bucketSort(inputArr);
        console.log('Sorted Array:', sortedArray.join(' '));
        rl.close();
    });
}

main();