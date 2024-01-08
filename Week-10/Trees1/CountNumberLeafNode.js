// Definition for a binary tree node
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

// Function to count the number of leaf nodes in a binary tree
function countLeafNodes(root) {
    if (!root) {
        return 0;
    }

    let count = 0;
    const stack = [root];

    while (stack.length > 0) {
        const node = stack.pop();

        if (!node.left && !node.right) {
            count++;
        }

        if (node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }
    }

    return count;
}

// Helper function to build the binary tree from level-order traversal input
function buildTree(input) {
    const values = input.split(' ').map(val => (val !== 'null' ? parseInt(val) : null));
    if (values.length === 0) return null;

    const root = new TreeNode(values[0]);
    const queue = [root];

    let i = 1;
    while (i < values.length) {
        const parent = queue.shift();

        if (values[i] !== null) {
            parent.left = new TreeNode(values[i]);
            queue.push(parent.left);
        }

        i++;

        if (i < values.length && values[i] !== null) {
            parent.right = new TreeNode(values[i]);
            queue.push(parent.right);
        }

        i++;
    }

    return root;
}

// Test Case 1
const input1 = "1 2 3 4 5 null 6";
const root1 = buildTree(input1);
console.log("Test Case 1 - Output:", countLeafNodes(root1)); // Output: 3

// Test Case 2
const input2 = "1 null 2 3 null null null";
const root2 = buildTree(input2);
console.log("Test Case 2 - Output:", countLeafNodes(root2)); // Output: 2