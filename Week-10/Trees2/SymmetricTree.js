class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function isSymmetric(root) {
    if (!root) return true;

    function isMirror(leftNode, rightNode) {
        if (!leftNode && !rightNode) return true;
        if (!leftNode || !rightNode) return false;
        return (
            leftNode.val === rightNode.val &&
            isMirror(leftNode.left, rightNode.right) &&
            isMirror(leftNode.right, rightNode.left)
        );
    }

    return isMirror(root.left, root.right);
}

function createTree(arr) {
    if (arr.length === 0) return null;

    const root = new TreeNode(parseInt(arr[0]));
    const queue = [root];

    for (let i = 1; i < arr.length; i += 2) {
        const currentNode = queue.shift();

        if (arr[i] !== 'null') {
            currentNode.left = new TreeNode(parseInt(arr[i]));
            queue.push(currentNode.left);
        }

        if (arr[i + 1] !== 'null') {
            currentNode.right = new TreeNode(parseInt(arr[i + 1]));
            queue.push(currentNode.right);
        }
    }

    return root;
}

function parseInput(input) {
    const arr = input.split(' ');
    return createTree(arr);
}

function main(input) {
    const root = parseInput(input);
    if (isSymmetric(root)) {
        console.log("The tree is symmetric");
    } else {
        console.log("The tree is not symmetric");
    }
}

// Test cases
main("1 2 2 3 4 4 3"); // Output: The tree is symmetric
main("1 2 2 null 3 null 3"); // Output: The tree is symmetric