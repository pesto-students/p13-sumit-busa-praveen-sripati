function playGuessingGame(numToGuess, totalGuesses = 10) {
  let numGuesses = 0;
  let userGuess;

  while (numGuesses < totalGuesses) {
    if (numGuesses === 0) {
      userGuess = prompt('Enter a number between 1 and 100.');
    } else if (userGuess < numToGuess) {
      userGuess = prompt(userGuess + ' is too small. Guess a larger number.');
    } else if (userGuess > numToGuess) {
      userGuess = prompt(userGuess + ' is too large. Guess a smaller number.');
    } else {
      userGuess = prompt('Please enter a number.');
    }

    if (userGuess === null) {
      return 0; // User pressed Cancel
    }

    userGuess = parseInt(userGuess);

    if (isNaN(userGuess)) {
      continue; // Invalid input, allow the user to try again
    }

    numGuesses++;

    if (userGuess === numToGuess) {
      return numGuesses; // Correct guess
    }
  }

  return 0; // Out of guesses
}

// Example usage
let numToGuess = 5;
let totalGuesses = 10;
let guessesTaken = playGuessingGame(numToGuess, totalGuesses);

if (guessesTaken > 0) {
  alert('Congratulations! You guessed the number ' + numToGuess + ' in ' + guessesTaken + ' guesses.');
} else {
  alert("Sorry, you're out of guesses. The number was " + numToGuess + '.');
}
