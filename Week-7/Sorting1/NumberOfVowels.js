// Function to count the number of vowels in a given string
const countVowels = (str) => {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
};

// Cocktail Shaker Sort function to sort the array of strings based on the number of vowels
const cocktailShakerSort = (arr) => {
    let swapped;
    do {
        // Set the swapped flag to false before each pass
        swapped = false;

        // Perform a forward pass
        for (let i = 0; i < arr.length - 1; i++) {
            if (countVowels(arr[i]) > countVowels(arr[i + 1])) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap the elements
                swapped = true;
            }
        }

        // If no elements were swapped, the array is already sorted
        if (!swapped) break;

        // Perform a backward pass
        swapped = false;
        for (let j = arr.length - 2; j >= 0; j--) {
            if (countVowels(arr[j]) > countVowels(arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap the elements
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
};

// Input: Prompt the user to enter the strings as a comma-separated string
const input = prompt("Enter strings as a comma-separated string:");

// Convert the comma-separated string of strings into an array of strings
const inputArray = input.split(",");

// Sort the array of strings based on the number of vowels
const sortedArray = cocktailShakerSort(inputArray);

// Output: Print each string in the sorted array on a new line
sortedArray.forEach((str) => console.log(str));