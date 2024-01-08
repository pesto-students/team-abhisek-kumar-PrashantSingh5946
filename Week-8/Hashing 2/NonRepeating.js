function findFirstNonRepeatingCharacter(str) {
    // Step 1: Create an empty hash table to store the frequency count of each character.
    const charFrequency = {};

    // Step 2: Iterate through the string and update the frequency count of each character in the hash table.
    for (const char of str) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Step 3: Iterate through the string again and find the first character with a frequency of 1.
    for (const char of str) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    // Step 4: If no such character is found, return a message indicating that.
    return "No non-repeating characters found";
}

// Test Case 1
const input1 = prompt("Enter the string for Test Case 1:").trim();
const output1 = findFirstNonRepeatingCharacter(input1);
console.log("Test Case 1 Output:", output1);

// Test Case 2
const input2 = prompt("Enter the string for Test Case 2:").trim();
const output2 = findFirstNonRepeatingCharacter(input2);
console.log("Test Case 2 Output:", output2);