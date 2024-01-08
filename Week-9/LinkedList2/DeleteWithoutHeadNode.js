class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    deleteWithoutHead(nodeToDelete) {
        if (!nodeToDelete || !nodeToDelete.next) {
            console.log("Deletion not possible!");
            return;
        }

        nodeToDelete.data = nodeToDelete.next.data;
        nodeToDelete.next = nodeToDelete.next.next;
    }

    display() {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.data} `);
            current = current.next;
        }
        process.stdout.write('\n');
    }
}

function deleteNodeWithoutHead(linkedList, targetValue) {
    let current = linkedList.head;
    while (current && current.data !== targetValue) {
        current = current.next;
    }

    if (current) {
        linkedList.deleteWithoutHead(current);
    } else {
        console.log("Node with the given value not found in the linked list!");
    }
}

// Example usage:
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const linkedList = new LinkedList();

rl.question("Enter elements (space-separated) to insert into the linked list: ", (input) => {
    const elements = input.split(" ").map(Number);
    for (const element of elements) {
        linkedList.insert(element);
    }

    rl.question("Enter the value of the element to be deleted without the head node: ", (valueToDelete) => {
        deleteNodeWithoutHead(linkedList, parseInt(valueToDelete));
        console.log("Resulting linked list:");
        linkedList.display();
        rl.close();
    });
});