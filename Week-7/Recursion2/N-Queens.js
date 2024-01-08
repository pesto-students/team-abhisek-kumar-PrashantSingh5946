function isSafe(board, row, col, N) {
    // Check left side of the current row
    for (let i = 0; i < col; i++) {
        if (board[row][i]) {
            return false;
        }
    }

    // Check upper diagonal on the left side
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j]) {
            return false;
        }
    }

    // Check lower diagonal on the left side
    for (let i = row, j = col; i < N && j >= 0; i++, j--) {
        if (board[i][j]) {
            return false;
        }
    }

    return true;
}

function solveNQueensUtil(N, board, col, result) {
    // If all queens are placed, add the current arrangement to the result
    if (col === N) {
        const arrangement = [];
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                if (board[i][j]) {
                    arrangement.push([i, j]);
                    break;
                }
            }
        }
        result.push(arrangement);
        return;
    }

    // Check each row for the current column
    for (let i = 0; i < N; i++) {
        if (isSafe(board, i, col, N)) {
            board[i][col] = 1;

            // Recur for the next column
            solveNQueensUtil(N, board, col + 1, result);

            // Backtrack and remove the queen from the current cell
            board[i][col] = 0;
        }
    }
}

function solveNQueens(N) {
    if (N < 1 || N === 2 || N === 3) {
        return "No possible arrangements";
    }

    const board = new Array(N).fill(null).map(() => new Array(N).fill(0));
    const result = [];

    solveNQueensUtil(N, board, 0, result);

    return result;
}

// Test Case 1
console.log(solveNQueens(4));

// Test Case 2
console.log(solveNQueens(2));