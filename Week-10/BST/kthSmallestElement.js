class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function kthSmallestElement(root, k) {
    if (!root) {
        return -1; // Tree is empty, so kth smallest element doesn't exist.
    }

    const stack = [];
    let current = root;
    let count = 0;

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        count++;

        if (count === k) {
            return current.value; // Found the kth smallest element
        }

        current = current.right;
    }

    return -1; // If the tree doesn't have k elements, return -1.
}

function constructBST(elements) {
    if (!elements || elements.length === 0) {
        return null;
    }

    const root = new TreeNode(elements[0]);

    for (let i = 1; i < elements.length; i++) {
        insertNode(root, elements[i]);
    }

    return root;
}

function insertNode(root, value) {
    if (value < root.value) {
        if (!root.left) {
            root.left = new TreeNode(value);
        } else {
            insertNode(root.left, value);
        }
    } else {
        if (!root.right) {
            root.right = new TreeNode(value);
        } else {
            insertNode(root.right, value);
        }
    }
}

// Sample Input and Test Cases
function main() {
    const input1 = "7 4 2 6 1 3 5 7 3";
    const elements1 = input1.split(" ").map(Number);
    const k1 = 3;

    const root1 = constructBST(elements1);
    const result1 = kthSmallestElement(root1, k1);
    console.log("Sample Output 1:", result1);

    const input2 = "1 2 3 1 3 2";
    const elements2 = input2.split(" ").map(Number);
    const k2 = 4;

    const root2 = constructBST(elements2);
    const result2 = kthSmallestElement(root2, k2);
    console.log("Sample Output 2:", result2);
}

main();