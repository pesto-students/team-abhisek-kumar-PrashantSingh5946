class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to create a binary tree from its level order traversal representation
function createBinaryTree(arr) {
    if (arr.length === 0) return null;

    const root = new TreeNode(arr.shift());
    const queue = [root];

    while (arr.length > 0) {
        const currentNode = queue.shift();

        const leftValue = arr.shift();
        if (leftValue !== null) {
            currentNode.left = new TreeNode(leftValue);
            queue.push(currentNode.left);
        }

        const rightValue = arr.shift();
        if (rightValue !== null) {
            currentNode.right = new TreeNode(rightValue);
            queue.push(currentNode.right);
        }
    }

    return root;
}

// Function to check if two binary trees are identical
function areBinaryTreesIdentical(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
        return true;
    } else if (tree1 === null || tree2 === null) {
        return false;
    } else if (tree1.value !== tree2.value) {
        return false;
    } else {
        return (
            areBinaryTreesIdentical(tree1.left, tree2.left) &&
            areBinaryTreesIdentical(tree1.right, tree2.right)
        );
    }
}

// Input
const input1 = prompt("Enter the level order traversal of the first binary tree (separated by spaces):");
const input2 = prompt("Enter the level order traversal of the second binary tree (separated by spaces):");

const arr1 = input1.split(" ").map(Number);
const arr2 = input2.split(" ").map(Number);

const tree1 = createBinaryTree(arr1);
const tree2 = createBinaryTree(arr2);

// Output
const result = areBinaryTreesIdentical(tree1, tree2);
console.log(result ? "The two binary trees are identical" : "The two binary trees are not identical");