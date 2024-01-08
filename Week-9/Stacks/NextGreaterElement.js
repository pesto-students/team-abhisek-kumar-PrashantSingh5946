// Function to find the next greater element for each element in the array
function findNextGreaterElements(arr) {
    const stack = [];
    const result = [];

    // Iterate through the array from right to left
    for (let i = arr.length - 1; i >= 0; i--) {
        // Pop elements from the stack until the top element is greater than the current element
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }

        // If the stack is empty, there is no greater element to the right, set next greater as -1
        if (stack.length === 0) {
            result.push(-1);
        } else {
            // Set the next greater element as the top element of the stack
            result.push(stack[stack.length - 1]);
        }

        // Push the current element onto the stack
        stack.push(arr[i]);
    }

    // Reverse the result array
    result.reverse();

    return result;
}

// Input prompt
const input = prompt("Enter comma space separated integers:");
const arr = input.split(", ").map(Number);

// Get the next greater elements array
const nextGreaterElements = findNextGreaterElements(arr);

// Display the result
console.log(nextGreaterElements.join(", "));