//global vars and arrays 
var guessesLeft = 10;
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var correctGuesses = 0;
var incorrectGuesses = 0;
var userWins = 0;
var userLoses = 0;
var userGuesses = [];
var userLetter = "";
var compLetter = "";

document.onkeyup = function(event) {  
	userLetter = event.key;
	if (options.includes(userLetter)){
		userGuesses.push(userLetter);
		checkGuessesLeft();
	}
	else {
		alert("Invalid option. Please select a letter");
	}
};	

function resetGame(){
	userGuesses = [];
	document.getElementById("guessesSoFar").innerHTML=
	"Your Guesses So Far: " + userGuesses;
	guessesLeft = 11;
	document.getElementById("guessesLeft").innerHTML="Guesses Remaining: " + guessesLeft;
	correctGuesses = 0;
	document.getElementById("correct").innerHTML=
		"Correct Guesses: " + correctGuesses;
	incorrectGuesses = -1;
	document.getElementById("incorrect").innerHTML=
	"Incorrect Guesses: " + incorrectGuesses;
	playGame();
};

function checkGuessesLeft() {
	if (guessesLeft >= 1){
		playGame();
	}
};

function playGame () {
	compLetter = options[Math.floor(Math.random()*options.length)];
	if (compLetter.toLowerCase() === userLetter.toLowerCase()){
		document.getElementById("guessesSoFar").innerHTML=
		"Your Guesses So Far: " + userGuesses;
		document.getElementById("guessesLeft").innerHTML="Guesses Remaining: " + guessesLeft;
		correctGuesses++;
		document.getElementById("correct").innerHTML=
		"Correct Guesses: " + correctGuesses;
		userWins++;
		document.getElementById("winsOverall").innerHTML=
		"Wins: " + userWins;
		alert("You are PSYCHIC! You won this round.")
		resetGame();
	}
	else {
		document.getElementById("guessesSoFar").innerHTML=
		"Your Guesses So Far: " + userGuesses;
		guessesLeft--;
		document.getElementById("guessesLeft").innerHTML="Guesses Remaining: " + guessesLeft;
		incorrectGuesses++;
		document.getElementById("incorrect").innerHTML=
		"Incorrect Guesses: " + incorrectGuesses;
		if (guessesLeft === 0){
			userLoses++;
			document.getElementById("losesOverall").innerHTML=
			"Loses: " + userLoses;
			alert("10 incorrect guesses. You must not be Psychic. Try your luck again.");
			resetGame();
		}
	}
};