class CuckooHashTable {
    constructor(size) {
        this.size = size;
        this.hashTable1 = new Array(size).fill(null);
        this.hashTable2 = new Array(size).fill(null);
        this.maxIterations = 10; // Maximum number of iterations to prevent infinite loops
    }

    hashFunction1(key) {
        return key % this.size;
    }

    hashFunction2(key) {
        return Math.floor(key / this.size) % this.size;
    }

    insert(key, value, currentTable, iteration = 0) {
        if (iteration >= this.maxIterations) {
            console.log("Max iterations reached. Unable to insert all elements.");
            return;
        }

        const otherTable = currentTable === this.hashTable1 ? this.hashTable2 : this.hashTable1;
        const hash1 = this.hashFunction1(key);
        const hash2 = this.hashFunction2(key);

        if (currentTable[hash1] === null) {
            currentTable[hash1] = { key, value };
        } else if (currentTable[hash2] === null) {
            currentTable[hash2] = { key, value };
        } else {
            const evictedEntry = currentTable[hash1];
            currentTable[hash1] = { key, value };

            this.insert(evictedEntry.key, evictedEntry.value, otherTable, iteration + 1);
        }
    }

    display() {
        console.log("HashTable 1:");
        this.hashTable1.forEach((entry) => {
            if (entry) {
                console.log(`${entry.key} ${entry.value}`);
            }
        });

        console.log("HashTable 2:");
        this.hashTable2.forEach((entry) => {
            if (entry) {
                console.log(`${entry.key} ${entry.value}`);
            }
        });
    }
}

function promptInput() {
    const input = prompt("Enter key-value pairs (key value):");
    const pairs = input.trim().split("\n");

    return pairs.map((pair) => {
        const [key, value] = pair.split(" ");
        return { key: parseInt(key), value };
    });
}

function main() {
    const pairs = promptInput();
    const size = pairs.length * 2; // Make the hash tables twice the size of the number of key-value pairs

    const cuckooHashTable = new CuckooHashTable(size);

    pairs.forEach(({ key, value }) => {
        cuckooHashTable.insert(key, value, cuckooHashTable.hashTable1);
    });

    cuckooHashTable.display();
}

main();