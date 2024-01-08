const reverseString = (str) => {
    // Base case: If the string is empty or has only one character, return the string as it is.
    if (str.length <= 1) {
        return str;
    }

    // Extract the first character of the string.
    const firstChar = str[0];

    // Call the recursive function on the remaining part of the string.
    const remainingStr = str.slice(1);
    const reversedSubString = reverseString(remainingStr);

    // Concatenate the first character with the reversed substring.
    return reversedSubString + firstChar;
};

// Test cases
console.log(reverseString("hello")); // Output: olleh
console.log(reverseString("racecar")); // Output: racecar