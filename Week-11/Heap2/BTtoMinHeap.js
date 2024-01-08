// Node class to represent each node of the binary tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to perform in-order traversal of the binary tree and store the node values in an array
function inOrderTraversal(root, result = []) {
    if (root === null) return;
    inOrderTraversal(root.left, result);
    result.push(root.value);
    inOrderTraversal(root.right, result);
}

// Function to construct a new min heap from a sorted array
function constructMinHeap(arr) {
    if (arr.length === 0) return null;

    const mid = Math.floor(arr.length / 2);
    const root = new Node(arr[mid]);
    root.left = constructMinHeap(arr.slice(0, mid));
    root.right = constructMinHeap(arr.slice(mid + 1));

    return root;
}

// Function to build a binary tree from an in-order traversal array
function buildBinaryTree(inOrderArr) {
    if (inOrderArr.length === 0) return null;

    const mid = Math.floor(inOrderArr.length / 2);
    const root = new Node(inOrderArr[mid]);
    root.left = buildBinaryTree(inOrderArr.slice(0, mid));
    root.right = buildBinaryTree(inOrderArr.slice(mid + 1));

    return root;
}

// Function to convert a binary tree into a min heap
function convertToMinHeap(root) {
    const inOrderArr = [];
    inOrderTraversal(root, inOrderArr);

    // Sort the in-order traversal array in ascending order
    const sortedArr = inOrderArr.slice().sort((a, b) => a - b);

    // Construct the new min heap from the sorted array
    return constructMinHeap(sortedArr);
}

// Function to print the in-order traversal of a binary tree
function printInorder(root) {
    if (root === null) return;

    printInorder(root.left);
    process.stdout.write(`${root.value} `);
    printInorder(root.right);
}

// Main function to run the program
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter elements of the binary tree in in-order traversal (separated by spaces): ', (input) => {
        const elements = input.split(' ').map(Number);

        // Build the binary tree from the in-order traversal array
        const root = buildBinaryTree(elements);

        // Convert the binary tree into a min heap
        const minHeapRoot = convertToMinHeap(root);

        // Print the in-order traversal of the converted min heap
        console.log('In-order traversal of the converted min heap:');
        printInorder(minHeapRoot);
        console.log();

        rl.close();
    });
}

// Run the main function to start the program
main();