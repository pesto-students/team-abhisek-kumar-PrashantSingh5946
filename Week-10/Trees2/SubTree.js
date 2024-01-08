class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// Function to build a binary tree from user input
function buildBinaryTree(input) {
    const nodes = input.split(' ').map(Number);
    const queue = [];
    const root = new TreeNode(nodes[0]);
    queue.push(root);

    for (let i = 1; i < nodes.length;) {
        const current = queue.shift();

        if (nodes[i] !== null) {
            current.left = new TreeNode(nodes[i]);
            queue.push(current.left);
        }
        i++;

        if (i < nodes.length && nodes[i] !== null) {
            current.right = new TreeNode(nodes[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

// Function to check if two trees are identical
function areIdentical(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;

    return (
        root1.val === root2.val &&
        areIdentical(root1.left, root2.left) &&
        areIdentical(root1.right, root2.right)
    );
}

// Function to check if the second tree is a subtree of the first tree
function isSubtree(tree1, tree2) {
    if (!tree2) return true;
    if (!tree1) return false;

    if (areIdentical(tree1, tree2)) return true;

    return isSubtree(tree1.left, tree2) || isSubtree(tree1.right, tree2);
}

// Main function to prompt user for input and check if the second tree is a subtree
function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter nodes of the first binary tree: ', (tree1Nodes) => {
        rl.question('Enter nodes of the second binary tree: ', (tree2Nodes) => {
            const tree1 = buildBinaryTree(tree1Nodes);
            const tree2 = buildBinaryTree(tree2Nodes);

            if (isSubtree(tree1, tree2)) {
                console.log('The second tree is a subtree of the first tree.');
            } else {
                console.log('The second tree is not a subtree of the first tree.');
            }

            rl.close();
        });
    });
}

main();