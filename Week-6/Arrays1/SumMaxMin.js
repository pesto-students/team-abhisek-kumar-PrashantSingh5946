function findSumOfMaxAndMin(input) {
    const numbers = input.split(' ').map(Number);
    let max = numbers[0];
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return max + min;
}

// Test Case 1
const input1 = "5 2 9 1 7";
console.log(findSumOfMaxAndMin(input1)); // Output: 10

// Test Case 2
const input2 = "-10 0 100 -50 20";
console.log(findSumOfMaxAndMin(input2)); // Output: 90