const generatePowerSet = (input) => {
    const nums = input.split(" ").map(Number);
    const powerSet = [];

    const generateSubsets = (startIndex, currentSubset) => {
        if (startIndex === nums.length) {
            powerSet.push([...currentSubset]);
            return;
        }

        // Include the current element in the subset
        currentSubset.push(nums[startIndex]);
        generateSubsets(startIndex + 1, currentSubset);

        // Exclude the current element from the subset
        currentSubset.pop();
        generateSubsets(startIndex + 1, currentSubset);
    };

    generateSubsets(0, []);

    return powerSet;
};

// Test Case 1
const input1 = "1 2 3";
console.log(generatePowerSet(input1));

// Test Case 2
const input2 = "4 7 1 9";
console.log(generatePowerSet(input2));