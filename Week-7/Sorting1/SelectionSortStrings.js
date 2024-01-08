function selectionSortStrings(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j].localeCompare(arr[minIndex]) < 0) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap the minimum element with the current element
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }

    return arr;
}

// Test Case 1
const input1 = ['banana', 'apple', 'grape', 'cherry'];
const output1 = selectionSortStrings(input1);
console.log(output1); // Output: ['apple', 'banana', 'cherry', 'grape']

// Test Case 2
const input2 = ['cat', 'dog', 'elephant', 'bear'];
const output2 = selectionSortStrings(input2);
console.log(output2); // Output: ['bear', 'cat', 'dog', 'elephant']