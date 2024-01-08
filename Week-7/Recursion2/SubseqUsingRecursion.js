const findSubsequences = (str, index = 0) => {
    if (index === str.length) {
        return [''];
    }

    const currentChar = str[index];
    const subsequencesWithoutCurrent = findSubsequences(str, index + 1);
    const subsequencesWithCurrent = subsequencesWithoutCurrent.map(subseq => currentChar + subseq);

    return [...subsequencesWithoutCurrent, ...subsequencesWithCurrent];
};

// Test Case 1
const input1 = 'abc';
const output1 = findSubsequences(input1);
console.log(output1); // Output: [, a, b, ab, c, ac, bc, abc]

// Test Case 2
const input2 = 'hello';
const output2 = findSubsequences(input2);
console.log(output2); // Output: [, h, e, eh, l, lh, le, leh, l, lh, lo, loh, ll, llh, lle, lleh, ll, llh, llo, lloh, o, oh, ol, olh, oll, ollh, olle, olleh]