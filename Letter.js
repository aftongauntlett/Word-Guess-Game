class Letter {
  constructor (letterValue){
    stringValue =letterValue
    guess = false

    guessLetter (guessedLetter); {
      if (this.stringValue === guessedLetter){
        this.guessed = true;
      }
    }

    renderLetter (); {
      if (guessed === false){
        console.log("_")
        return "_";
      }
      else {
        console.log(letter)
        return letter;
      }
      
    }
  
  }
}

module.exports = {
  Letter
}