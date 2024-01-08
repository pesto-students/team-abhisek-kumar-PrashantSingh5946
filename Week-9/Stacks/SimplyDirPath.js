// Function to simplify the directory path
const simplifyDirectoryPath = (inputPath) => {
    // Split the input path by slashes to get an array of directories
    const directories = inputPath.split('/');

    // Create an empty stack to store the simplified directories
    const stack = [];

    // Iterate through each directory in the array
    for (const directory of directories) {
        // If the directory is a dot '.', ignore it
        if (directory === '.' || directory === '') {
            continue;
        }
        // If the directory is a double dot '..', pop the top directory from the stack if it is not empty
        else if (directory === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
        }
        // Otherwise, push the directory onto the stack
        else {
            stack.push(directory);
        }
    }

    // Construct the simplified path using the directories in the stack
    const simplifiedPath = '/' + stack.join('/');

    return simplifiedPath;
};

// Prompt the user to enter an absolute path as a string
const inputPath = prompt("Enter the absolute path:");

// Call the function and display the simplified path
const simplifiedPath = simplifyDirectoryPath(inputPath);
console.log("Simplified Path:", simplifiedPath);