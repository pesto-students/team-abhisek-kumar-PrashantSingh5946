function findIndicesRecursive(arr, target, index = 0) {
    if (index === arr.length) {
        return [];
    }

    const currentElement = arr[index];
    const remainingIndices = findIndicesRecursive(arr, target, index + 1);

    if (currentElement === target) {
        return [index, ...remainingIndices];
    }

    return remainingIndices;
}

// Test Case 1
const arr1 = [1, 2, 3, 2, 4, 2, 5];
const target1 = 2;
console.log(findIndicesRecursive(arr1, target1)); // Output: [1, 3, 5]

// Test Case 2
const arr2 = [1, 1, 1, 1, 1];
const target2 = 1;
console.log(findIndicesRecursive(arr2, target2)); // Output: [0, 1, 2, 3, 4]