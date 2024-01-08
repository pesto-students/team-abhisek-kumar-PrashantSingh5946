// Function that creates a counter
function counter() {
  let count = 0; // Private variable

  // Inner function that increments the count and returns its value
  return function () {
    count++;
    return count;
  };
}

// Create two instances of the counter function
const firstCounter = counter();
const secondCounter = counter();

// Create an array to store the values from firstCounter
const firstValues = [];

// Call the firstCounter function five times and store the returned values in the array
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}

// Create an array to store the values from secondCounter
const secondValues = [];

// Call the secondCounter function three times and store the returned values in the array
for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

// Print the arrays
console.log("firstValues array:", firstValues);
console.log("secondValues array:", secondValues);
