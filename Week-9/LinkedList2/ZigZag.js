// Node class to represent a node in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class to represent the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to insert elements into the linked list
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

    // Method to rearrange the linked list in zig-zag fashion
    rearrangeZigZag() {
        let current = this.head;
        let isLesser = true; // Start with a lesser flag

        while (current && current.next) {
            // If current node is lesser than the next node and it is at an even index (0-based)
            if ((isLesser && current.data > current.next.data) || (!isLesser && current.data < current.next.data)) {
                // Swap the values of the two nodes
                const temp = current.data;
                current.data = current.next.data;
                current.next.data = temp;
            }
            current = current.next;
            isLesser = !isLesser; // Toggle the lesser flag for the next iteration
        }
    }

    // Method to convert the linked list into a string representation
    toString() {
        let result = "";
        let current = this.head;
        while (current) {
            result += current.data + " ";
            current = current.next;
        }
        return result.trim();
    }
}

// Function to rearrange the linked list in a zig-zag fashion
function rearrangeLinkedList() {
    const input = prompt("Enter elements for the linked list (separated by spaces):");
    const elements = input.split(" ").map(Number);

    const linkedList = new LinkedList();
    for (const element of elements) {
        linkedList.insert(element);
    }

    linkedList.rearrangeZigZag();

    const result = linkedList.toString();
    console.log("Rearranged Linked List:", result);
}

// Call the main function
rearrangeLinkedList();