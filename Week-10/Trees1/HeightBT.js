class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function buildTree(inputArray) {
    if (inputArray.length === 0) return null;

    const root = new TreeNode(parseInt(inputArray[0]));
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < inputArray.length) {
        const node = queue.shift();

        if (inputArray[i] !== 'null') {
            node.left = new TreeNode(parseInt(inputArray[i]));
            queue.push(node.left);
        }
        i++;

        if (inputArray[i] !== 'null') {
            node.right = new TreeNode(parseInt(inputArray[i]));
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

function getHeight(root) {
    if (root === null) return 0;

    const leftHeight = getHeight(root.left);
    const rightHeight = getHeight(root.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function calculateTreeHeight(input) {
    const inputArray = input.trim().split(' ');
    const root = buildTree(inputArray);
    const height = getHeight(root);
    return height;
}

// Test Cases
console.log(calculateTreeHeight("3 9 20 null null 15 7")); // Output: 3
console.log(calculateTreeHeight("10 5 20 3 8 null 25 null null null null 7")); // Output: 4