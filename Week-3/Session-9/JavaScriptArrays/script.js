function divideArray(numbers) {
  let evenNums = numbers.filter((num) => num % 2 === 0).sort((a, b) => a - b);
  let oddNums = numbers.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  console.log("Even numbers:");
  if (evenNums.length === 0) {
    console.log("None");
  } else {
    evenNums.forEach((num) => console.log(num));
  }

  console.log("Odd numbers:");
  if (oddNums.length === 0) {
    console.log("None");
  } else {
    oddNums.forEach((num) => console.log(num));
  }
}

// Example usage:
let nums = [4, 2, 9, 1, 8];
divideArray(nums);
