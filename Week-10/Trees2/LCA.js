// Node class to define the structure of each node in the binary tree
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Function to construct a binary tree from the given level order values
function buildTree(levelOrderValues) {
    if (!levelOrderValues.length) return null;

    const root = new Node(levelOrderValues[0]);
    const queue = [root];
    let index = 1;

    while (index < levelOrderValues.length) {
        const current = queue.shift();

        if (levelOrderValues[index] !== null) {
            current.left = new Node(levelOrderValues[index]);
            queue.push(current.left);
        }
        index++;

        if (index < levelOrderValues.length && levelOrderValues[index] !== null) {
            current.right = new Node(levelOrderValues[index]);
            queue.push(current.right);
        }
        index++;
    }

    return root;
}

// Function to find the lowest common ancestor of two nodes in a binary tree
function lowestCommonAncestor(root, node1Value, node2Value) {
    if (root === null) return null;
    if (root.value === node1Value || root.value === node2Value) return root;

    const leftSubtree = lowestCommonAncestor(root.left, node1Value, node2Value);
    const rightSubtree = lowestCommonAncestor(root.right, node1Value, node2Value);

    if (leftSubtree && rightSubtree) return root;
    if (leftSubtree) return leftSubtree;
    if (rightSubtree) return rightSubtree;

    return null;
}

// Test cases
function testLowestCommonAncestor(levelOrderValues, node1Value, node2Value) {
    const root = buildTree(levelOrderValues);
    const ancestor = lowestCommonAncestor(root, node1Value, node2Value);

    console.log(`The lowest common ancestor of nodes ${node1Value} and ${node2Value} is ${ancestor.value}.`);
}

// Test Case 1
testLowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1);

// Test Case 2
testLowestCommonAncestor([1, 2, 3, 4, 5], 2, 4);