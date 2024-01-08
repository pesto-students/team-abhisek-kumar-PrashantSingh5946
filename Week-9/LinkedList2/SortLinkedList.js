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

    sortLinkedList() {
        const countArray = [0, 0, 0];
        let current = this.head;

        while (current) {
            countArray[current.data]++;
            current = current.next;
        }

        current = this.head;
        let index = 0;

        while (current) {
            if (countArray[index] === 0) {
                index++;
            } else {
                current.data = index;
                countArray[index]--;
                current = current.next;
            }
        }
    }

    display() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + ' ';
            current = current.next;
        }
        console.log(result.trim());
    }
}

// Main function to run the program
function main() {
    const ll = new LinkedList();

    const input = prompt("Enter elements (0s, 1s, and 2s only) to insert into the linked list:");
    const elements = input.split(" ").map(Number);

    for (const element of elements) {
        if (![0, 1, 2].includes(element)) {
            console.log("Invalid input. Only 0s, 1s, and 2s are allowed.");
            return;
        }
        ll.insert(element);
    }

    ll.sortLinkedList();
    ll.display();
}

main();