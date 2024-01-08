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

    findIntersectionPoint(anotherList) {
        const getLength = (list) => {
            let length = 0;
            let current = list.head;
            while (current) {
                length++;
                current = current.next;
            }
            return length;
        };

        const length1 = getLength(this);
        const length2 = getLength(anotherList);

        let longerList = this.head;
        let shorterList = anotherList.head;
        let diff = Math.abs(length1 - length2);

        if (length1 < length2) {
            longerList = anotherList.head;
            shorterList = this.head;
        }

        while (diff > 0) {
            longerList = longerList.next;
            diff--;
        }

        while (longerList && shorterList) {
            if (longerList === shorterList) {
                return longerList.data;
            }
            longerList = longerList.next;
            shorterList = shorterList.next;
        }

        return "No Intersection Point";
    }
}

// Main function to run the program
function findIntersection() {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    // Input for list1
    const inputList1 = prompt("Enter elements for list1 (space-separated):");
    inputList1.split(" ").forEach((element) => list1.insert(Number(element)));

    // Input for list2
    const inputList2 = prompt("Enter elements for list2 (space-separated):");
    inputList2.split(" ").forEach((element) => list2.insert(Number(element)));

    // Find intersection point
    const intersectionPoint = list1.findIntersectionPoint(list2);
    console.log(`Intersection Point: ${intersectionPoint}`);
}

// Call the main function
findIntersection();