// import the letter class, from letter.js file 

// use {} because of module export
const { Letter } = require("./Letter");

// Defining the class Word 
class Word {

    // create an array letter objects
    constructor(word) {

        // word is passed in as a string
        this.letters = word

            // used split to turn word into an array
            .split("")

            // turns the array of strings into an array of letters
            .map(letter => new Letter(letter))
    }

    // function to call on the class word.
    renderWord() {

        //  Use map to turn an array of letter classes into an array of characters. 
        const word = this.letters.map(letter => letter.renderLetter())

        // use join to turn an array into a string
        console.log(word.join(" "))
    }
    // for each runs through all of the letters until complete
    guess(guessedLetter) {
        this.letters.forEach(letter => letter.guessLetter(guessedLetter))
    }
}

module.exports = {
    Word
}

// Contains a class, `Word`, that depends on the`Letter` class.This is used to create an object representing the current word the user is attempting to guess.That means the class should define:

//   * An array of`new` `Letter` objects representing the letters of the underlying word

//     * A function that returns a string representing the word.This should call the function on each letter object(the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object(the second function defined in `Letter.js`)