const { Word } = require("./word")

// running the constructor for the class word here
const cat = new Word("kitten")

// console.log(JSON.stringify(cat))
cat.renderWord()
cat.guess("t")
cat.renderWord()


// Randomly selects a word and uses the`Word` class to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses

// `Letter.js` * should not * `require` any other files.

// `Word.js` * should only * require`Letter.js` 