
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
var guessesRemaining;
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


}

// if the players guess matches a letter of the superheros//

if(superPerson.indexOf(alphabetUsed) > -1) {
	for(var i = 0; i < superPerson.length; i++) {
		if(superPerson[i] === alphabetUsed) {
			answerArray[i] = alphabetUsed;
			document.getElementById('ghostLtr').innerHTML = alphabetUsed.join('_');
		}
	}
}

// to reset the game //

// var reset = function () {
// 	var totalgueses = 9;
// 	var guesleft = 9;
// 	guessedletter = [];

// 	updateLetterToGuess();
// 	updateGuessesLeft();
// 	updatewins ();



// }


