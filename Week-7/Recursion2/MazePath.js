function findMazePaths(row, col, numRows, numCols, currentPath, result) {
    // Base case: If the current position is at the bottom-right corner, add the current path to the result and return
    if (row === numRows - 1 && col === numCols - 1) {
        result.push(currentPath);
        return;
    }

    // If the current row or column is out of bounds, return
    if (row >= numRows || col >= numCols) {
        return;
    }

    // Recursive call for moving down
    findMazePaths(row + 1, col, numRows, numCols, currentPath + 'D', result);

    // Recursive call for moving right
    findMazePaths(row, col + 1, numRows, numCols, currentPath + 'R', result);
}

function mazePaths(numRows, numCols) {
    const result = [];
    findMazePaths(0, 0, numRows, numCols, '', result);
    return result;
}

// Test Case 1
console.log(mazePaths(3, 3));
// Output: ["RRDD", "RDRD", "RDDR", "DRRD", "DRDR", "DDRR"]

// Test Case 2
console.log(mazePaths(2, 2));
  // Output: ["RD", "DR"]