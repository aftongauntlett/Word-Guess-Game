const { Word } = require("./word")
const inquirer = require("inquirer")
// running the constructor for the class word here
const hiddenWord = new Word("kitten")
// Test Game Flow
// hiddenWord.renderWord()
// hiddenWord.guess("t")
// hiddenWord.renderWord()
// Randomly selects a word and uses the`Word` class to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses
promptGuess = function () {
    return new Promise(function (resolve, reject) {
        //then prompts the user for a letter to guess
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "What letter would you like to guess?"
            }
        ]).then(function (response) {
            //removes any capitalization and stores the response as a variable
            let currentGuess = response.guess.toLowerCase();
            //uses the user guess as a parameter for the guess function in the word class
            //if the guess is a letter somewhere in the word then 'reveal' all instances of it
            if (hiddenWord.letters.includes(currentGuess)) {
                hiddenWord.guess(currentGuess)
                console.log("it reached here!")
            }
            //or else substract one from the guessesLeft count
            else {
                console.log("oops")
                guessesLeft--;
            }
            resolve(hiddenWord.guess(currentGuess));
        })
    })
};
//the global variables to control game flow
let guessesLeft = 8;
let roundNumber = 0;
//Actual Game Flow
const roundFlow = () => {
    return new Promise(function (resolve, reject) {
        if (guessesLeft <= 0){return;} //This is the losing condition
        else if (false) {return;} //This is the winning condition
        else {
        hiddenWord.renderWord();
        console.log("Guesses Left: " + guessesLeft)
        const promiseA = promptGuess();
        Promise.all([promiseA]).then(function (returnedPromiseArray) {
            hiddenWord.renderWord()
            console.log("Guesses Left: " + guessesLeft)
            roundNumber++;
            console.log(`Round ${roundNumber} finished!`)
        });
        resolve();
    }//end of the else statement
    })//end of promsie function, this promise function is not nesscarry but still useful if i want to put it into a promise.All later
};
const gameFlow = () => {
    const promiseC = roundFlow();
    Promise.all([promiseC]);
}
roundFlow();
// `Letter.js` * should not * `require` any other files.
// `Word.js` * should only * require`Letter.js`