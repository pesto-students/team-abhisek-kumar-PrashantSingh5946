class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function invertBinaryTree(root) {
    if (root === null) {
        return null;
    }

    // Swap left and right children
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Recursively invert left and right subtrees
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);

    return root;
}

function levelOrderTraversal(root) {
    const result = [];
    if (!root) {
        return result;
    }

    const queue = [root];

    while (queue.length) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }

        result.push(currentLevel);
    }

    return result;
}

// Test Case 1
const root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.right = new TreeNode(7);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);
root1.right.left = new TreeNode(6);
root1.right.right = new TreeNode(9);

const invertedRoot1 = invertBinaryTree(root1);
console.log("Test Case 1:");
console.log("Sample Input:", levelOrderTraversal(root1));
console.log("Sample Output:", levelOrderTraversal(invertedRoot1));

// Test Case 2
const root2 = new TreeNode(10);
root2.left = new TreeNode(5);
root2.right = new TreeNode(15);
root2.left.left = new TreeNode(3);
root2.left.right = new TreeNode(8);
root2.right.left = new TreeNode(12);
root2.right.right = new TreeNode(18);

const invertedRoot2 = invertBinaryTree(root2);
console.log("Test Case 2:");
console.log("Sample Input:", levelOrderTraversal(root2));
console.log("Sample Output:", levelOrderTraversal(invertedRoot2));