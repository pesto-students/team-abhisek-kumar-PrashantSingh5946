// Function to check if the given year is a leap year
const isLeapYear = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
};

// Function to prompt user for input and display the result
const checkLeapYear = () => {
    const year = parseInt(prompt("Enter a year:"));

    if (isNaN(year)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }

    const isLeap = isLeapYear(year);

    if (isLeap) {
        console.log("Yes");
    } else {
        console.log("No");
    }
};

// Call the function to check for leap year
checkLeapYear();