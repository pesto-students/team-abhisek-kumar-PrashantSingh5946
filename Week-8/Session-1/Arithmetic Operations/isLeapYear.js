function isLeapYear(year) {
  if (year % 400 === 0) {
    return "Yes";
  } else if (year % 100 === 0) {
    return "No";
  } else if (year % 4 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}
