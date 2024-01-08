// Define the Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Define the LinkedList class
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

    // Method to subtract the second linked list from the first linked list
    subtract(secondList) {
        let current1 = this.head;
        let current2 = secondList.head;
        let borrow = 0;

        while (current1) {
            let diff = current1.data - (current2 ? current2.data : 0) - borrow;

            if (diff < 0) {
                diff += 10;
                borrow = 1;
            } else {
                borrow = 0;
            }

            current1.data = diff;
            current1 = current1.next;
            if (current2) {
                current2 = current2.next;
            }
        }
    }

    // Method to convert the linked list into a string representation
    toString() {
        let current = this.head;
        let result = '';

        while (current) {
            result += `${current.data} `;
            current = current.next;
        }

        return result.trim();
    }
}

// Function to perform the subtraction operation on two linked lists
function subtractLinkedLists() {
    const firstInput = prompt('Enter elements of the first linked list (separated by spaces):');
    const secondInput = prompt('Enter elements of the second linked list (separated by spaces):');

    const firstElements = firstInput.split(' ').map(Number);
    const secondElements = secondInput.split(' ').map(Number);

    // Create instances of LinkedList
    const firstList = new LinkedList();
    const secondList = new LinkedList();

    // Insert elements into the linked lists
    firstElements.forEach(data => firstList.insert(data));
    secondElements.forEach(data => secondList.insert(data));

    // Perform the subtraction operation
    firstList.subtract(secondList);

    // Display the result
    console.log('Result:', firstList.toString());
}

// Call the function to run the program
subtractLinkedLists();