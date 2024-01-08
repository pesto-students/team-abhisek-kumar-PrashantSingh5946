function findIntersection(arr1, arr2) {
    // Step 1 - Create a new Set using the elements of one array.
    const set = new Set(arr1);
    // Step 2 - Initialize an empty intersection array.
    const intersection = [];

    // Step 3 - Iterate over the elements of the other array.
    for (const num of arr2) {
        // Step 4 - For each element, check if it exists in the Set.
        if (set.has(num)) {
            // Step 5 - If it does, add it to the intersection array and remove it from the Set.
            intersection.push(num);
            set.delete(num);
        }
    }

    // Step 6 - At the end, the intersection array will contain the common elements.
    // Step 7 - Return the intersection array.
    return intersection;
}

// Test Case 1
const input1 = "1,2,3,4,5";
const input2 = "4,5,6,7,8";
const arr1 = input1.split(",").map(Number);
const arr2 = input2.split(",").map(Number);
const result1 = findIntersection(arr1, arr2);
console.log("Test Case 1:");
console.log("Sample Input:");
console.log(arr1);
console.log(arr2);
console.log("Sample Output:");
console.log(result1);

// Test Case 2
const input3 = "1,2,3,4,5";
const input4 = "5,4,3,2,1";
const arr3 = input3.split(",").map(Number);
const arr4 = input4.split(",").map(Number);
const result2 = findIntersection(arr3, arr4);
console.log("Test Case 2:");
console.log("Sample Input:");
console.log(arr3);
console.log(arr4);
console.log("Sample Output:");
console.log(result2);