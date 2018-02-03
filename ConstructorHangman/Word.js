// require the letter.js file
const Letter = require('./Letter.js');

function Word(wrd) {
    const that = this;
    this.word = wrd;
    this.letters = [];
    this.correctWordGuess = false;

    this.getLetter = function () {
        // function to check if letter guessed was correct
        for (const i = 0; i < that.word.length; i++) {
            const newLetter = new Letter(that.word[i]);
            this.letters.push(newLetter);
        }
    };

    // function to check if you found the word
    this.isWordFound = function () {
        if (this.letters.every(function (ltrChosen) {
                return ltrChosen.guessed === true;
            })) {
            this.correctWordGuess = true;
            return true;
        }
    };

    // replace the letter if it was correct
    this.isLetterFound = function(guessedLetter) {
        const shouldItBeReturned = 0;
        this.letters.forEach(function(ltrChosen) {
            if(ltrChosen.letter === guessedLetter) {
                ltrChosen.guessed = true;
                shouldItBeReturned++;
            }
        })
        // replace the underscore with the letter if the guess is correct
        return shouldItBeReturned;
    };

    // word render that displays the word to the screen
    this.wordRender = function() {
        const display = '';
        that.letters.forEach(function(ltrChosen) {
            const currentLetter = ltrChosen.letterRender();
            display += currentLetter;
        });
        
        return display;
    }
};


module.exports = Word;