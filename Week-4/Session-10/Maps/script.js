function calcWordFrequencies() {
  const wordMap = new Map();

  // Reading input from prompt and splitting into words
  const input = prompt("Enter a list of words separated by spaces:");
  const words = input.split(" ");

  // Looping through words and counting frequencies
  words.forEach((word) => {
    const lowerCaseWord = word.toLowerCase(); // Convert to lowercase for case insensitivity
    if (wordMap.has(lowerCaseWord)) {
      wordMap.set(lowerCaseWord, wordMap.get(lowerCaseWord) + 1);
    } else {
      wordMap.set(lowerCaseWord, 1);
    }
  });

  // Outputting word frequencies to console
  wordMap.forEach((value, key) => {
    console.log(`${key} ${value}`);
  });
}
