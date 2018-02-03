// Letter constructor
function Letter (ltr) {
    // store the letter the user inputs
    this.letter = ltr;
    // letter guessed is set to false at first
    this.guessed = false;
}

Letter.prototype.showGuessedLetters = function () {
    // show spaces in the word the user needs to guess
    if (this.letter == ' ') {
        this.guessed = true;
        return '  ';
    // keep the underscore if the user does not guess correctly
    } if (this.guessed = false) {
        return ' _ ';
    // show the letter the user guessed if it was correct
    } else (this.guessed === true) 
        return this.letter;
}

module.exports = Letter;