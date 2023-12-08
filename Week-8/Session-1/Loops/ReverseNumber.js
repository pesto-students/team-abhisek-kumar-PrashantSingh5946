// Take input a number from the user and reverse all the digits
// Example1
// Input:
// 12345
// Output:
// 54321
// Explanation:
// The digits of the number 12345 are reversed to obtain 54321.

function reverseNum(num) {
  //Convert the num to string -> reverse -> return the parsed number

  let str = num.toString();
  let charArray = str.split("");

  let reverseArray = [];

  for (let i = 0; i < charArray.length; i++) {
    reverseArray[i] = charArray[charArray.length - (i + 1)];
  }

  return parseInt(reverseArray.join(""));
}

console.log(reverseNum(12345));
