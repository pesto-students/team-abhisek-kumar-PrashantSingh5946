function isPalindrome(str) {
  let flag = true;

  let charArray = str.split("");

  let length = charArray.length;

  //Loop over the arra and compare the first half to the second half
  for (let i = 0; i < length / 2; i++) {
    if (charArray[i] == charArray[length - (i + 1)]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }

  return flag;
}

console.log(isPalindrome("Hello")); //F
console.log(isPalindrome("WHW")); //T
console.log(isPalindrome("raDAr")); //F
console.log(isPalindrome("racecar")); //T
console.log(isPalindrome("noon")); //T
