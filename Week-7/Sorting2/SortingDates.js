const shellSortDates = (datesArr) => {
    // Convert dates to timestamps
    const timestampsArr = datesArr.map((dateStr) => new Date(dateStr).getTime());

    // Shell Sort implementation
    const n = timestampsArr.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = timestampsArr[i];
            let j = i;

            while (j >= gap && timestampsArr[j - gap] > temp) {
                timestampsArr[j] = timestampsArr[j - gap];
                j -= gap;
            }

            timestampsArr[j] = temp;
        }

        gap = Math.floor(gap / 2);
    }

    // Convert timestamps back to dates
    const sortedDatesArr = timestampsArr.map((timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        return formattedDate;
    });

    return sortedDatesArr;
};

// Test case 1
const input1 = "2023-07-03 12:30:15,2023-07-03 10:15:00,2023-07-02 18:45:30,2023-07-01 20:00:00";
const sortedDates1 = shellSortDates(input1.split(","));
console.log(sortedDates1.join(","));

// Test case 2
const input2 = "2023-07-03 09:00:00,2023-07-02 15:30:00,2023-07-01 12:45:00,2023-07-03 18:20:00";
const sortedDates2 = shellSortDates(input2.split(","));
console.log(sortedDates2.join(","));