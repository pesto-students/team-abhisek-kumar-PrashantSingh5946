class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function findMaxPathSum(root) {
    if (root === null) return 0;

    const leftSum = findMaxPathSum(root.left);
    const rightSum = findMaxPathSum(root.right);

    // Three options to consider: node alone, node with left subtree, and node with right subtree
    const maxPathThroughNode = Math.max(root.val, root.val + leftSum, root.val + rightSum);

    // Update the global maximum path sum if a new maximum is found
    findMaxPathSum.maxSum = Math.max(findMaxPathSum.maxSum, maxPathThroughNode, root.val + leftSum + rightSum);

    // Return the maximum path sum through the current node
    return maxPathThroughNode;
}

function maximumPathSum(root) {
    findMaxPathSum.maxSum = Number.MIN_SAFE_INTEGER;
    findMaxPathSum(root);
    return findMaxPathSum.maxSum;
}

// Helper function to build the binary tree from a space-separated string
function buildBinaryTree(input) {
    const values = input.split(' ').map(val => (val === 'null' ? null : parseInt(val)));
    const root = new TreeNode(values[0]);
    const queue = [root];
    let i = 1;

    while (i < values.length) {
        const current = queue.shift();

        if (values[i] !== null) {
            current.left = new TreeNode(values[i]);
            queue.push(current.left);
        }

        i++;

        if (i < values.length && values[i] !== null) {
            current.right = new TreeNode(values[i]);
            queue.push(current.right);
        }

        i++;
    }

    return root;
}

// Test Case 1
const input1 = '1 2 3 -1 5 6 7';
const root1 = buildBinaryTree(input1);
console.log(maximumPathSum(root1)); // Output: 18

// Test Case 2
const input2 = '1 2 null 3 null 4 null 5';
const root2 = buildBinaryTree(input2);
console.log(maximumPathSum(root2)); // Output: 15