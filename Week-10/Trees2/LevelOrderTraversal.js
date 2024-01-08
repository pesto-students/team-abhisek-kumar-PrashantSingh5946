class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function levelOrderTraversal(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let levelNodes = '';

        for (let i = 0; i < levelSize; i++) {
            const currentNode = queue.shift();
            levelNodes += currentNode.value + ' ';

            if (currentNode.left) {
                queue.push(currentNode.left);
            }

            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        result.push(levelNodes);
    }

    return result;
}

function parseBinaryTree(input) {
    const nodes = input.split(' ').map(Number);
    const n = nodes.shift();
    const treeNodes = nodes.map((value) => new TreeNode(value));
    treeNodes.forEach((node, index) => {
        const leftIndex = nodes[index * 2];
        const rightIndex = nodes[index * 2 + 1];
        node.left = leftIndex !== -1 ? treeNodes[leftIndex - 1] : null;
        node.right = rightIndex !== -1 ? treeNodes[rightIndex - 1] : null;
    });

    return treeNodes[0];
}

function printLevelOrderTraversal(input) {
    const root = parseBinaryTree(input);
    const levels = levelOrderTraversal(root);
    levels.forEach((level, index) => console.log(`Level ${index + 1}: ${level}`));
}

// Test Case 1
const input1 = "5 1 2 3 4 5 1 2 3 4 -1 -1 -1 -1 -1 -1";
console.log("Test Case 1 Output:");
printLevelOrderTraversal(input1);

// Test Case 2
const input2 = "5 1 2 3 4 5 2 3 4 -1 -1 5 -1 -1 -1 -1";
console.log("\nTest Case 2 Output:");
printLevelOrderTraversal(input2);