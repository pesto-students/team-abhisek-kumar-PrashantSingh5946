function swapChars(str, i, j) {
    const arr = str.split('');
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr.join('');
}

function generatePermutations(str, startIndex, permutations) {
    if (startIndex === str.length - 1) {
        permutations.push(str);
        return;
    }

    for (let i = startIndex; i < str.length; i++) {
        str = swapChars(str, startIndex, i);
        generatePermutations(str, startIndex + 1, permutations);
        str = swapChars(str, startIndex, i); // Backtrack to restore the original order
    }
}

function printAllPermutations(str) {
    const permutations = [];
    generatePermutations(str, 0, permutations);
    console.log(permutations.join(' '));
}

// Test Case 1
console.log("Test Case 1:");
printAllPermutations('abc');

// Test Case 2
console.log("Test Case 2:");
printAllPermutations('ab');