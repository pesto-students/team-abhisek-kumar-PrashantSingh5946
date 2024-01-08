// Function to merge two sorted arrays
function merge(leftArr, rightArr) {
    let mergedArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            mergedArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            mergedArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    return [...mergedArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

// Function to perform Merge Sort on an array of dates
function mergeSortDates(datesArr) {
    if (datesArr.length <= 1) {
        return datesArr;
    }

    const mid = Math.floor(datesArr.length / 2);
    const leftArr = datesArr.slice(0, mid);
    const rightArr = datesArr.slice(mid);

    const sortedLeft = mergeSortDates(leftArr);
    const sortedRight = mergeSortDates(rightArr);

    return merge(sortedLeft, sortedRight);
}

// Prompting the user for input and executing the program
function main() {
    const inputDates = prompt("Enter dates as a comma-separated string (YYYY-MM-DD): ");
    const datesArr = inputDates.split(",");

    const sortedDates = mergeSortDates(datesArr);

    console.log("Sorted Dates:");
    sortedDates.forEach((date) => {
        console.log(date);
    });
}

main();