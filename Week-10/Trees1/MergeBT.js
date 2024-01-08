class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function mergeBinaryTrees(arr1, arr2) {
    if (!arr1.length && !arr2.length) {
        return null;
    }
    if (!arr1.length) {
        return new Node(arr2[0]);
    }
    if (!arr2.length) {
        return new Node(arr1[0]);
    }

    const mergedValue = arr1[0] + arr2[0];
    const mergedNode = new Node(mergedValue);

    mergedNode.left = mergeBinaryTrees(arr1.slice(1), arr2.slice(1));
    mergedNode.right = mergeBinaryTrees(arr1.slice(Math.floor(arr1.length / 2)), arr2.slice(Math.floor(arr2.length / 2)));

    return mergedNode;
}

function printPreorder(node) {
    if (node !== null) {
        process.stdout.write(node.value + " ");
        printPreorder(node.left);
        printPreorder(node.right);
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Helper function to read input as an array of integers from a single line
function readIntArrayFromLine() {
    return new Promise(resolve => {
        rl.once('line', line => {
            const arr = line.trim().split(' ').map(Number);
            resolve(arr);
        });
    });
}

(async function () {
    // Input the array representation of the two binary trees
    console.log("Enter the array representation of the first binary tree:");
    const arr1 = await readIntArrayFromLine();

    console.log("Enter the array representation of the second binary tree:");
    const arr2 = await readIntArrayFromLine();

    // Merge the binary trees
    const mergedTree = mergeBinaryTrees(arr1, arr2);

    // Print the merged binary tree in pre-order traversal
    console.log("The merged binary tree is:");
    printPreorder(mergedTree);
    console.log();
    rl.close();
})();