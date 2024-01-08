function findMaxProductSubarray(arr) {
    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            // Swap maxProduct and minProduct
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        maxProduct = Math.max(arr[i], maxProduct * arr[i]);
        minProduct = Math.min(arr[i], minProduct * arr[i]);

        result = Math.max(result, maxProduct);
    }

    return result;
}

// Input reading from the user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the size of the array followed by elements separated by space: ', input => {
    const elements = input.split(' ').map(Number);
    const maxProduct = findMaxProductSubarray(elements);
    console.log('Maximum Product of a Subarray:', maxProduct);

    rl.close();
});