// require inquirer
const inquirer = require('inquirer');
// require word.js
const Word = require('./Word.js');

// array of words for user to guess from
const wordList = ['san diego', 'los angeles', 'portland', 'seattle', 'san francisco'];

const hangman = {
    wordBank: wordList,
    guessesRemaining: 12,
    //empty array to hold letters guessed by user
    guessedLetters: [],
    display: 0,
    currentWord: null,
    // start the game 
    startGame: function () {
        const that = this;
        if (this.guessedLetters.length > 0) {
            this.guessedLetters = [];
        }

        inquirer
            .prompt([{
                    name: "welcome",
                    type: "confirm",
                    message: "Welcome to hangman. Ready to play?"
                }]).then(function(answer) {
            if (answer.welcome) {
                that.newGame();
            } else {
                console.log("Goodbye");
            }
        })
    }
   // create a math.random function to pick a random word from the word bank 
   
   
   // create function to use the word and letter.js to put underscores
   // for the word that was selected from the word bank

   // create a prompt to let the user start guessing letters
   // if the user guesses a letter correctly have the letter replace the underscore

   // if the user does not guess correctly, store it to the guessed letters empty array

   // if the user runs out of guesses prompt them to play again and let them know they lost

   // if the user guesses the word prompt them to play again and let them know they won
};

// calls a function to start the game
hangman.startGame();