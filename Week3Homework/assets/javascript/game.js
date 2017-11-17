
// Hangman Game //

prompt("Press any key to start!")

//list of superheros //

var superHeroArray = ['batman', 'superman', 'wonderwoman', 
'spiderman', 'wolverine', 'thor', 'antman', 'deadpool', 'hulk', 'robin', 'punisher', 'elektra', 'daredevil'];

// computer will pick a random superhero from the list //

var superHero = superHeroArray[Math.floor(Math.random() * superHeroArray.length)];

console.log(superHero)

// global variables //

var h;
var count = 0;
var answerArray = [];

// underscores will match the randomly selected word//

var superHero = superHero.length;
var underscores = '';
for (i = 0; i < superHero; i++) {
	underscores = underscores + '_'
};

console.log(superHero.length);



function reWriteStats() {
	console.log("-------------");
	console.log('startUp');
}

// 


