const largestRectangleArea = (histogram) => {
    const stack = [];
    let maxArea = 0;

    for (let i = 0; i <= histogram.length; i++) {
        while (stack.length > 0 && (i === histogram.length || histogram[i] < histogram[stack[stack.length - 1]])) {
            const height = histogram[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    return maxArea;
};

// Main program
const getInputHistogram = () => {
    const input = prompt('Enter comma-separated integers representing the histogram:');
    const histogram = input.split(',').map(num => parseInt(num.trim(), 10));
    return histogram;
};

const main = () => {
    const histogram = getInputHistogram();
    const maxArea = largestRectangleArea(histogram);
    console.log('Area of the largest rectangle in the histogram:', maxArea);
};

main();