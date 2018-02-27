
// Hangman Game //

prompt("Press any key to start!")

//list of superheros //

var superHero = ['batman', 'superman', 'wonderwoman', 
'spiderman', 'wolverine', 'thor', 'antman', 'deadpool', 'hulk', 'robin', 'punisher', 'elektra', 'daredevil'];

// computer will pick a random superhero from the list //

var superPerson = superHero[Math.floor(Math.random() * superHero.length)];

console.log(superPerson)

// global variables //

var currentGuess;
var click;
var ghostLtr;
var record;
var winner = 0;
var alphabetUsed = [];
var lettersUsed = [];
var answerArray = [];


// underscores will match the randomly selected word//

for (var i = 0; i < superPerson.length; i++) {
		answerArray[i] = "_";
		console.log(answerArray);
	}

document.getElementById('ghostLtr').textContent = answerArray.join(" ");

// track which letters the user has guessed //

document.onkeyup = function(event) {
	alphabetUsed = event.key;
	console.log(alphabetUsed);
	lettersUsed.push(alphabetUsed);
	document.getElementById('alphabetUsed').innerHTML = lettersUsed;



// have the letters players guess show up instead of the blank dashes//

if(superPerson.indexOf(alphabetUsed) > -1) {

	// var dashes = document.getElementById("ghostLtr").innerHTML;
	// console.log(dashes);
	// dashes[superPerson.indexOf(alphabetUsed)] = alphabetUsed;
	// console.log(dashes);
	// document.getElementById("ghostLtr").innerHTML = dashes;
	
	for(var i = 0; i < superPerson.length; i++) {
		if(superPerson[i] === alphabetUsed) {
			answerArray[i] = alphabetUsed;
			alphabetUsed = alphabetUsed.split('');
			document.getElementById("ghostLtr").innerHTML = alphabetUsed.join("_");
		}
	}
}

// show how many guesses are left //

var totalGuesses = 12;
var guessesRemaining = [];

if(guessesRemaining.indexOf(answerArray) > -1) {
	for(var i = 0; i < 11; i--) {
		if(guessesRemaining[i] === alphabetUsed) {
			totalGuesses = guessesRemaining[i];
			document.getElementById("guessesRemaining").innerHTML = totalGuesses;
			console.log(guessesRemaining);
		}
	}
}

}



// if the player loses//



// if the player wins //

// to reset the game //

// var reset = function () {
// 	var totalGuesses = 12;
// 	var guessesRemaining = [];
// 	var lettersUsed = [];

// 	updateLetterToGuess();
// 	updateGuessesLeft();
// 	updatewins ();



// }


