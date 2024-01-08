// Function to validate parentheses
const isValidParentheses = (input) => {
    const stack = [];

    for (let i = 0; i < input.length; i++) {
        const currentChar = input[i];

        if (currentChar === '(' || currentChar === '{' || currentChar === '[') {
            stack.push(currentChar);
        } else if (currentChar === ')' || currentChar === '}' || currentChar === ']') {
            if (stack.length === 0) {
                return false;
            }

            const lastOpen = stack.pop();
            if (
                (currentChar === ')' && lastOpen !== '(') ||
                (currentChar === '}' && lastOpen !== '{') ||
                (currentChar === ']' && lastOpen !== '[')
            ) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// Main function
const main = () => {
    const input = prompt('Enter a string containing parentheses:').trim();
    const result = isValidParentheses(input);
    console.log(result);
};

// Call the main function
main();