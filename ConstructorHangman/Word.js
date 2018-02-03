// Word.js: Contains a constructor, Word that depends on the Letter 
// constructor.This is used to create an object representing the current 
// word the user is attempting to guess.That means the constructor should 
// define:
// An array of new Letter objects representing the letters of the underlying 
// word
// A function that returns a string representing the word.This should call 
// the function on each letter 
// object(the first function defined in Letter.js) that displays the 
// character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the 
// guess function on each letter 
// object(the second function defined in Letter.js)

// require the letter.js file
const Letter = require('./Letter.js');

function Word (wrd) {
    const that = this;
    this.word = wrd;
    this.letters = [];
    this.correctWordGuess = false;

    this.getLetter = function() {
        // populate the word with the letter objects
        for(const i = 0; i < that.word.length; i++) {
            const newLetter = new Letter(that.word[i]);
            this.letters.push(newLetter); 
        }   
    }
    // function to check if letter guessed was correct
    
};



// function to check if you found the word 

// word render that displays to the screen


module.exports = Word;


