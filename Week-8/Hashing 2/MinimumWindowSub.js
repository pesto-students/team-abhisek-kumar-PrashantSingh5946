function minWindowSubstring(str1, str2) {
    // Initialize a hashmap targetCount to store the count of characters in str2.
    const targetCount = {};
    for (const char of str2) {
        targetCount[char] = (targetCount[char] || 0) + 1;
    }

    // Initialize variables left and right to track the window boundaries in str1.
    let left = 0;
    let right = 0;

    // Initialize variables minWindow and minLength to track the minimum window substring.
    let minWindow = "";
    let minLength = Infinity;

    // Initialize a variable requiredCount to keep track of the required count of characters in the window.
    let requiredCount = Object.keys(targetCount).length;

    while (right < str1.length) {
        // Move the right pointer to expand the window and update requiredCount and targetCount accordingly.
        const charRight = str1[right];
        if (targetCount[charRight] !== undefined) {
            targetCount[charRight]--;
            if (targetCount[charRight] === 0) {
                requiredCount--;
            }
        }
        right++;

        // If requiredCount becomes 0, it means all characters from str2 are included in the window.
        while (requiredCount === 0) {
            // Update minWindow and minLength if the current window is smaller.
            if (right - left < minLength) {
                minWindow = str1.substring(left, right);
                minLength = right - left;
            }

            // Move the left pointer to contract the window and update requiredCount and targetCount accordingly.
            const charLeft = str1[left];
            if (targetCount[charLeft] !== undefined) {
                targetCount[charLeft]++;
                if (targetCount[charLeft] > 0) {
                    requiredCount++;
                }
            }
            left++;
        }
    }

    return minWindow;
}

// Test Cases
console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindowSubstring("aaabbbcdd", "abc")); // Output: "abbbc"