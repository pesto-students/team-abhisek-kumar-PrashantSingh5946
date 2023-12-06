function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guessCount = 0;
  let userGuess;

  while (guessCount < totalGuesses) {
    if (guessCount === 0) {
      userGuess = prompt("Enter a number between 1 and 100.");
    } else if (userGuess < numToGuess) {
      userGuess = prompt(userGuess + " is too small. Guess a larger number.");
    } else if (userGuess > numToGuess) {
      userGuess = prompt(userGuess + " is too large. Guess a smaller number.");
    }

    if (userGuess === null) {
      return 0; // User pressed Cancel
    } else if (userGuess === "" || isNaN(userGuess)) {
      prompt("Please enter a number.");
    } else {
      guessCount++;
      if (parseInt(userGuess) === numToGuess) {
        return guessCount;
      }
    }
  }

  return 0;
}
