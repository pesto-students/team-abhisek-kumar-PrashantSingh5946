// Function to find the maximum product subarray
const maxProductSubarray = (arr) => {
    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            // Swap the maximum and minimum products if the current number is negative
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        // Update the maximum and minimum products
        maxProduct = Math.max(arr[i], maxProduct * arr[i]);
        minProduct = Math.min(arr[i], minProduct * arr[i]);

        // Update the result with the current maximum product
        result = Math.max(result, maxProduct);
    }

    return result;
};

// Input from the user as a space-separated array of integers
const input = prompt("Enter an array of integers separated by spaces:");
const array = input.split(" ").map(Number);

// Find the maximum product subarray
const maxProduct = maxProductSubarray(array);

// Print the result
console.log("Maximum Product Subarray:", maxProduct);