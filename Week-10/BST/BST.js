class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

function convertBSTtoLinkedList(root) {
    let prev = null;
    function inOrderTraversal(node) {
        if (!node) return;

        inOrderTraversal(node.left);

        if (prev === null) {
            root = node;
        } else {
            prev.right = node;
        }

        node.left = null;
        prev = node;

        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);
    return root;
}

function printLinkedList(head) {
    let current = head;
    let result = '';

    while (current !== null) {
        result += current.value + ' -> ';
        current = current.right;
    }

    result += 'null';
    console.log(result);
}

// Test Case 1
const bst1 = new BST();
const input1 = [5, 7, 4, 2, 5, 1, 3, 6, 7];
input1.forEach((value) => bst1.insert(value));
let head1 = convertBSTtoLinkedList(bst1.root);
printLinkedList(head1);

// Test Case 2
const bst2 = new BST();
const input2 = [3, 2, 1, 3];
input2.forEach((value) => bst2.insert(value));
let head2 = convertBSTtoLinkedList(bst2.root);
printLinkedList(head2);