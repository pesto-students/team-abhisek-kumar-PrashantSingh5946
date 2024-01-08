function getInputArray() {
    const rows = parseInt(prompt("Enter the number of rows:"));
    const cols = parseInt(prompt("Enter the number of columns:"));
    const arr = [];

    for (let i = 0; i < rows; i++) {
        const rowElements = prompt(`Enter elements for row ${i + 1} (separated by space):`);
        const rowArray = rowElements.split(" ").map(Number);
        if (rowArray.length !== cols) {
            throw new Error("Arrays must have the same dimensions");
        }
        arr.push(rowArray);
    }

    return arr;
}

function calculateSumOfArrays(array1, array2) {
    if (array1.length !== array2.length || array1[0].length !== array2[0].length) {
        throw new Error("Arrays must have the same dimensions");
    }

    const sumArray = [];

    for (let i = 0; i < array1.length; i++) {
        const row = [];
        for (let j = 0; j < array1[0].length; j++) {
            row.push(array1[i][j] + array2[i][j]);
        }
        sumArray.push(row);
    }

    return sumArray;
}

try {
    console.log("Enter elements for the first array:");
    const array1 = getInputArray();

    console.log("Enter elements for the second array:");
    const array2 = getInputArray();

    const result = calculateSumOfArrays(array1, array2);
    console.log("Resultant array:");
    console.log(result);
} catch (error) {
    console.error(error.message);
}