$(document).ready(function() {
			initialLoad();
})

var questions = [
	{
		questionTitle: 'When was the solar system formed?',
		wrongImageUrl: 'assets/images/question1.gif',
		correctImageUrl: 'assets/images/question1.gif',
		answers: [
			{answerText: 'Around 3 billion years ago', correct: false},
			{answerText: 'Around 4.6 billion years ago', correct: true},
			{answerText: 'Around 6 billion years ago', correct: false},
			{answerText: 'Around 1 billion years ago', correct: false}
		]
	},
	{
		questionTitle: 'Which is the hottest planet in our solar system?',
		wrongImageUrl: 'assets/images/question2.gif',
		correctImageUrl: 'assets/images/question2.gif',
		answers: [
			{answerText: 'Venus', correct: true},
			{answerText: 'Jupiter', correct: false},
			{answerText: 'Pluto', correct: false},
			{answerText: 'Saturn', correct: false}
		]
	},	
	{
		questionTitle: 'Which planet has the most moons?',
		wrongImageUrl: 'assets/images/question3.gif',
		correctImageUrl: 'assets/images/question3.gif',
		answers: [
			{answerText: 'Saturn', correct: false},
			{answerText: 'Earth', correct: false},
			{answerText: 'Jupiter', correct: true},
			{answerText: 'Uranus', correct: false}
		]
	},
	{
		questionTitle: 'Which is the largest planet in our solar system?',
		wrongImageUrl: 'assets/images/question4.gif',
		correctImageUrl: 'assets/images/question4.gif',
		answers: [
			{answerText: 'Pluto', correct: false},
			{answerText: 'Mars', correct: false},
			{answerText: 'Mars', correct: false},
			{answerText: 'Jupiter', correct: true}
		]
	},
	{
		questionTitle: 'When was the first man made object sent into space?',
		wrongImageUrl: 'assets/images/question5.gif',
		correctImageUrl: 'assets/images/question5.gif',
		answers: [
			{answerText: '1960', correct: false},
			{answerText: '1957', correct: true},
			{answerText: '1989', correct: false},
			{answerText: '1930', correct: false}
		]
	},
	{
		questionTitle: 'When was pluto reclassified from a planet to a dwarf planet?',
		wrongImageUrl: 'assets/images/question6.gif',
		correctImageUrl: 'assets/images/question6.gif',
		answers: [
			{answerText: 'A. 2006', correct: true},
			{answerText: 'B. 2016', correct: false},
			{answerText: 'C. 1990', correct: false},
			{answerText: 'D. 1975', correct: false}
		]
	},
	{
		questionTitle: 'Which planet has approximately the same landmass as earth?',
		wrongImageUrl: 'assets/images/question7.gif',
		correctImageUrl: 'assets/images/question7.gif',
		answers: [
			{answerText: 'Neptune', correct: false},
			{answerText: 'Uranus', correct: false},
			{answerText: 'Venus', correct: false},
			{answerText: 'Mars', correct: true}
		]
	},
	{
		questionTitle: 'How much time does it take for sun rays to reach earth?',
		wrongImageUrl: 'assets/images/question8.gif',
		correctImageUrl: 'assets/images/question8.gif',
		answers: [
			{answerText: '2 hours', correct: false},
			{answerText: '3 days', correct: false},
			{answerText: '8 minutes', correct: true},
			{answerText: '20 minutes', correct: false}
		]
	},
	{
		questionTitle: 'Which planet is nearest earth?',
		wrongImageUrl: 'assets/images/question9.gif',
		correctImageUrl: 'assets/images/question9.gif',
		answers: [
			{answerText: 'Pluto', correct: false},
			{answerText: 'Mercury', correct: true},
			{answerText: 'Mars', correct: false},
			{answerText: 'Neptune', correct: false}
		]
	},
	{
		questionTitle: 'Which star is at the center of our solar system?',
		wrongImageUrl: 'assets/images/question10.gif',
		correctImageUrl: 'assets/images/question10.gif',
		answers: [
			{answerText: 'The Sun', correct: true},
			{answerText: 'Earth', correct: false},
			{answerText: 'Mars', correct: false},
			{answerText: 'Neptune', correct: false}
		]
	}
]

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var currentQuestion = 0;
var intervalId;
var timerRunning = false;

var timer = {
	time: 15,

	reset: function() {
		timer.time = 15;
		$('#timeRemaining').html('15');
		clearInterval(intervalId);
		timerRunning = false;
	},

	start: function() {
		if (!timerRunning) {
			$('#timeRemaining').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>')
			intervalId = setInterval(timer.count, 1000);
			timerRunning = true;

		}
	},

	count: function() {
		timer.time--;
		$('#timeRemaining').html('<h3>' + 'Time Remaining: ' + timer.time + '</h3>');
		if (timer.time == 0) {
			answer();
		}
	}
}

function question() {
	timer.reset();
	timer.start();
	$('#answers').empty();
	$('#question').html('<h2>' + questions[currentQuestion].questionTitle + '</h2>');
	for (var i = 0; i < questions[currentQuestion].answers.length; i ++) {
		var button = $('<button onclick="answer('+i+')" class="answerButton">' + questions[currentQuestion].answers[i].answerText + '</button>');
		$('#answers').append(button)
	}
}

function nextQuestion() {
	$('.startingDiv').hide();
	$('.correctAnswer').hide();
	$('.summary').hide();
	$('.questionsDiv').show();
	currentQuestion = currentQuestion + 1;
	if (currentQuestion < questions.length){
		question();	
	} else {
		gameSummary();
	}
}

function initialLoad() {
		$('.startingDiv').show();
		$('.correctAnswer').hide();
		$('.summary').hide();
		$('.questionsDiv').hide();
		$('#summaryMessage').hide();
		$('#startOverButton').hide();
}

function startQuiz() {	
	$('.startingDiv').hide();
	$('.correctAnswer').hide();
	$('.summary').hide();
	$('.questionsDiv').show();
	correctAnswers = 0;
	incorrectAnswers = 0;
	unanswered = 0;
	currentQuestion = 0;
	question();
}

function answer(i) {
	$('.startingDiv').hide();
	$('.correctAnswer').show();
	$('.summary').hide();
	$('.questionsDiv').hide();
	var choice = questions[currentQuestion].answers[i];
	var correctImage = questions[currentQuestion].correctImageUrl;
	var wrongImage = questions[currentQuestion].wrongImageUrl;

	for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
		if (questions[currentQuestion].answers[i].correct === true) {
			var rightAnswer = questions[currentQuestion].answers[i].answerText;
		}
	}
	
	if (timer.time > 0) {
		if (choice.correct === true) {
			$('#message').html('<h2>Correct!</h2>')
			$('#correctAnswer').empty();
			$('#image').html('<img src="'+correctImage+'"/>')
			correctAnswers++;

		} else {
			$('#message').html('<h2>Nice Try!</h2>');
			$('#correctAnswer').html('<h3>The correct answer is: ' + rightAnswer + '</h3>');
			$('#image').html('<img src="'+wrongImage+'"/>')
			incorrectAnswers++;
		}
	}

	if (timer.time === 0) {
		$('#message').html('<h2>Time\'s up!</h2>');
		$('#correctAnswer').html('<p>The correct answer is: ' + rightAnswer + '</p>');
		$('#image').html('<img src="'+wrongImage+'"/>')
		unanswered++;
	}
	setTimeout('nextQuestion()', 5000)
}

function gameSummary() {
	timer.reset();
	$('.startingDiv').hide();
	$('.correctAnswer').hide();
	$('.summary').show();
	$('.questionsDiv').hide();
	if (correctAnswers <= 5) {
		$('#summaryMessage').show();
		$('#summaryImage').html('<img src="assets/images/spacecat.gif"/>');
		$('#summary').html('Planet better next time!')
	} else {
		$('#summaryImage').html('<img src="assets/images/spacecat.gif"/>')
		$('#summary').html('You are looking pretty stellar!')
	}
	$('#correctAnswers').html('<h3>Correct Answers: '+ correctAnswers + '</h3>');
	$('#incorrectAnswers').html('<h3>Incorrect Answers: ' + incorrectAnswers + '</h3>');
	$('#unanswered').html('<h3>Unanswered Questions: '+ unanswered + '</h3>')
}
