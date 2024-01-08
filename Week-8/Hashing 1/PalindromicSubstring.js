function longestPalindromicSubstring(s) {
    let start = 0;
    let maxLength = 0;

    // Helper function to expand from center and find the longest palindrome
    function expandFromCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        const length = right - left - 1;
        if (length > maxLength) {
            start = left + 1;
            maxLength = length;
        }
    }

    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        // For odd-length palindromes
        expandFromCenter(i, i);
        // For even-length palindromes
        expandFromCenter(i, i + 1);
    }

    // Extract the longest palindromic substring using start and maxLength
    return s.substring(start, start + maxLength);
}

// Prompt the user to enter a string
const inputString = prompt("Enter a string:");

// Find the longest palindromic substring
const result = longestPalindromicSubstring(inputString);

// Display the result
console.log("Longest Palindromic Substring:", result);