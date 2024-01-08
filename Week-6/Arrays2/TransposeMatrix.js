// Function to take matrix input from the user
const takeMatrixInput = () => {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question('Enter the number of rows: ', (rows) => {
            rl.question('Enter the number of columns: ', (cols) => {
                const matrix = [];
                for (let i = 0; i < rows; i++) {
                    const row = [];
                    for (let j = 0; j < cols; j++) {
                        rl.question(`Enter the element at row ${i + 1} column ${j + 1}: `, (element) => {
                            row.push(parseInt(element));
                            if (row.length === cols) {
                                matrix.push(row);
                            }
                            if (matrix.length === rows) {
                                rl.close();
                                resolve(matrix);
                            }
                        });
                    }
                }
            });
        });
    });
};

// Function to transpose the matrix
const transposeMatrix = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposedMatrix = [];

    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposedMatrix.push(newRow);
    }

    return transposedMatrix;
};

// Function to print the matrix
const printMatrix = (matrix) => {
    for (const row of matrix) {
        console.log(row.join(' '));
    }
};

// Main function
const main = async () => {
    try {
        console.log('Enter the matrix:');
        const matrix = await takeMatrixInput();

        console.log('Original Matrix:');
        printMatrix(matrix);

        const transposedMatrix = transposeMatrix(matrix);

        console.log('Transposed Matrix:');
        printMatrix(transposedMatrix);
    } catch (error) {
        console.error('Error:', error);
    }
};

main();