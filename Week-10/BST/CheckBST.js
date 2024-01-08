class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if (!root) {
        return true; // Base case: Leaf nodes are always valid BSTs.
    }

    if (root.value <= min || root.value >= max) {
        return false; // Violates the BST property.
    }

    return isBST(root.left, min, root.value) && isBST(root.right, root.value, max);
}

function createBinaryTree() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter the number of nodes: ', (numNodes) => {
        numNodes = parseInt(numNodes, 10);

        rl.question('Enter the value of the root node: ', (rootValue) => {
            const root = new Node(parseInt(rootValue, 10));
            const queue = [root];

            for (let i = 0; i < numNodes; i++) {
                rl.question(`Enter the value of the left child of node ${queue[0].value}: `, (leftValue) => {
                    const left = leftValue === '-1' ? null : new Node(parseInt(leftValue, 10));
                    queue[0].left = left;

                    rl.question(`Enter the value of the right child of node ${queue[0].value}: `, (rightValue) => {
                        const right = rightValue === '-1' ? null : new Node(parseInt(rightValue, 10));
                        queue[0].right = right;

                        if (left) {
                            queue.push(left);
                        }
                        if (right) {
                            queue.push(right);
                        }

                        queue.shift(); // Move to the next node in the queue.

                        if (queue.length === 0) {
                            rl.close();
                            const result = isBST(root);
                            console.log(`The binary tree is a BST: ${result}`);
                        }
                    });
                });
            }
        });
    });
}

createBinaryTree();