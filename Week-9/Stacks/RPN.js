// Function to evaluate RPN expression
const evaluateRPN = (tokens) => {
    const stack = [];

    for (const token of tokens) {
        if (!isNaN(token)) { // Check if the token is an operand (number)
            stack.push(Number(token));
        } else { // Token is an operator
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
                default:
                    throw new Error('Invalid operator: ' + token);
            }
        }
    }

    return stack.pop();
};

// Prompting the user to enter RPN tokens
const input = prompt('Enter the RPN expression (space separated):');

// Split the input into an array of tokens
const tokens = input.split(' ');

try {
    const result = evaluateRPN(tokens);
    console.log('Result:', result);
} catch (error) {
    console.error('Error:', error.message);
}