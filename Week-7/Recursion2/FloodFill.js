const floodFill = (grid, row, col, newColor, startingColor, visited) => {
    const ROWS = grid.length;
    const COLS = grid[0].length;

    // Check if the current position is outside the grid or the cell has been visited
    if (row < 0 || row >= ROWS || col < 0 || col >= COLS || visited[row][col]) {
        return;
    }

    // Check if the color of the current cell is the same as the starting color
    if (grid[row][col] !== startingColor) {
        return;
    }

    // Mark the current cell as visited and update its color to the new color
    visited[row][col] = true;
    grid[row][col] = newColor;

    // Recursively call the floodFill function for the adjacent cells
    floodFill(grid, row - 1, col, newColor, startingColor, visited); // Up
    floodFill(grid, row + 1, col, newColor, startingColor, visited); // Down
    floodFill(grid, row, col - 1, newColor, startingColor, visited); // Left
    floodFill(grid, row, col + 1, newColor, startingColor, visited); // Right
};

const floodFillAlgorithm = (grid, row, col, newColor) => {
    const startingColor = grid[row][col];
    const ROWS = grid.length;
    const COLS = grid[0].length;

    // Create a visited array to keep track of visited cells
    const visited = new Array(ROWS).fill().map(() => new Array(COLS).fill(false));

    // Call the floodFill function with the starting position and new color
    floodFill(grid, row, col, newColor, startingColor, visited);

    return grid;
};

// Test Case 1
const grid1 = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1]
];
console.log(floodFillAlgorithm(grid1, 1, 1, 2));
// Output: [ [2, 2, 2], [2, 2, 0], [2, 0, 1] ]

// Test Case 2
const grid2 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];
console.log(floodFillAlgorithm(grid2, 0, 0, 3));
  // Output: [ [3, 3, 3], [3, 3, 3], [3, 3, 3] ]