const checkForDuplicates = (input) => {
    const elements = input.split(' ').map(Number);
    const hashTable = {};

    for (const element of elements) {
        if (hashTable[element]) {
            console.log('There are duplicate elements in the array.');
            return;
        }
        hashTable[element] = true;
    }

    console.log('There are no duplicate elements in the array.');
};

// Get user input
const userInput = prompt('Enter a series of integers separated by spaces:');
checkForDuplicates(userInput);