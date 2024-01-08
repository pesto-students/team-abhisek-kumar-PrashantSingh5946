class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function hasPathSum(root, targetSum) {
    if (!root) {
        return false;
    }

    targetSum -= root.val;

    if (!root.left && !root.right) {
        return targetSum === 0;
    }

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

function buildTree(nodes) {
    const arr = nodes.split(' ').map((val) => (val === 'null' ? null : parseInt(val)));
    const root = new TreeNode(arr[0]);
    const queue = [root];

    for (let i = 1; i < arr.length;) {
        const node = queue.shift();

        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }

        i++;

        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }

        i++;
    }

    return root;
}

function main(input) {
    const lines = input.trim().split('\n');
    const nodes = lines[0];
    const targetSum = parseInt(lines[1]);

    const root = buildTree(nodes);
    const result = hasPathSum(root, targetSum);
    return result;
}

// Test Case 1
const input1 = '5 4 8 11 null 13 4 7 2 null null null 1 22\n';
console.log(main(input1)); // Output: true

// Test Case 2
const input2 = '1 2 1\n';
console.log(main(input2)); // Output: false