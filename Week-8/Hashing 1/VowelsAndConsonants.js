const isVowel = (char) => {
    const vowels = 'aeiouAEIOU';
    return vowels.includes(char);
};

const longestSubarrayWithEqualVowelsAndConsonants = (input) => {
    let maxLen = 0;
    let vowelCount = 0;
    let consonantCount = 0;
    const countMap = new Map();

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (isVowel(char)) {
            vowelCount++;
        } else {
            consonantCount++;
        }

        const difference = vowelCount - consonantCount;
        if (difference === 0) {
            maxLen = Math.max(maxLen, i + 1);
        } else if (countMap.has(difference)) {
            maxLen = Math.max(maxLen, i - countMap.get(difference));
        } else {
            countMap.set(difference, i);
        }
    }

    return maxLen;
};

// Taking input from the user
const input = prompt("Enter a string:");
const result = longestSubarrayWithEqualVowelsAndConsonants(input);
console.log(`Longest subarray with equal vowels and consonants: ${result}`);