// create a class called letter
class Letter {
  constructor(letterValue) {

    // A string value to store the underlying character for the letter
    // this. must be used, it accesses a variable for THIS instance
    this.stringValue = letterValue

    // A boolean value that stores whether that letter has been guessed yet
    this.guess = false

    // the constructor should close here, it does not define functions.
  }

  // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  // if letter value is true to guessed letter, set guess to true (defaulted to false in constructor)
  guessLetter(guessedLetter) {
    if (this.stringValue === guessedLetter) {
      this.guess = true;
    }
  }

  // A function that returns the underlying character if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed
  // replaced if else statement with ternary - if false return: "_"
  renderLetter() {
    return this.guess ? this.stringValue : "_"
  }
}

module.exports = {
  Letter
}





