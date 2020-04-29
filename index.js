const { Word } = require("./word")

// running the constructor for the class word here
const cat = new Word("kitten")

// console.log(JSON.stringify(cat))
cat.renderWord()
cat.guess("t")
cat.renderWord()


