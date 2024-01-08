class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const serialize = (root) => {
    if (!root) {
        return "";
    }

    const leftSerialized = serialize(root.left);
    const rightSerialized = serialize(root.right);

    let serializedTree = `${root.val}`;

    if (leftSerialized) {
        serializedTree += ` ${leftSerialized}`;
    }

    if (rightSerialized) {
        serializedTree += ` ${rightSerialized}`;
    }

    return serializedTree;
};

// Test cases
// Test Case 1
// Sample Input: 1
// Sample Output: 1
const root1 = new TreeNode(1);
console.log(serialize(root1)); // Output: "1"

// Test Case 2
// Sample Input: 1 2 null null null
// Sample Output: 2,1
const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = null;
root2.left.right = null;
console.log(serialize(root2)); // Output: "2 1"