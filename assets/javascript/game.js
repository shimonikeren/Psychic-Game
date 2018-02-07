//global variables and arrays 
var wins = 1; //# of times user has guessed correctly 
var wrongGuesses = 1; 
var countLoses = 1; //this counts wrong guesses
var loses = 1; //user gets +1 loss when they guessed 9 times without succes 
var guessesLeft = 8;  //they get 9 guesses at start of round
var guessesSoFar = []; //empty array to push user's guesses into 
var Options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //this is an array of letters the computer and user can choose from 


//create function for when user releases key, keep track of what they clicked, the computer will generate a random letter, then the two letters will be compared 
//create function for when user clicks and releases a key that:
//1. Decreases the number of guesses left after each guess, starting at 9
//2.tracks guesses so far
//3. computer generate random letter 
//4. compare user guess and computer guess
//5. tracks wins: increase number of wins +1 each time the player guesses correctly **THEN RESET**
//5. tracks loses: every time user guesses 9 times without success, add +1 to loss counter **THEN RESET**

document.onkeyup = function(keypushed) {

//each time user guesses (by clicking a letter), reduce this var by 1 
document.getElementById("guessesleft").innerHTML = ("Guesses Left: " + guessesLeft--);

//generate random letter 
	var compIndex  =Math.floor(Math.random()*Options.length);	
	var randomCompChoice=Options[compIndex];
		console.log("user:" + keypushed.key);
  		console.log("computer: " + randomCompChoice);

//keep track of user guesses, and show guesses in innerHTML
  	guessesSoFar.push(keypushed.key); //push this to the global empty array guessesSoFar
  	console.log(guessesSoFar);
	document.getElementById("guessessofar").innerHTML = ("Your Guesses So Far: " + guessesSoFar); //display the array guessesSoFar in innerHTML 

//create a reset function to call to reset guessesSoFar and guessesLeft whenever user wins or guesses incorrectly 9 times 
function reset () {
	guessesSoFar = [];
	guessesLeft = 9;
	countWrongGuesses = 0;
	document.getElementById("guessessofar").innerHTML = ("Your Guesses So Far: " + guessesSoFar);
	document.getElementById("guessesleft").innerHTML = ("Guesses Left: " + guessesLeft--);
	console.log("User incorrect guesses this round: " + countWrongGuesses);
}

//keep track of incorrect guesses
// then reset when incorrect guesses amounts to 9 
var countWrongGuesses = (wrongGuesses++);
console.log("User incorrect guesses this round: " + countWrongGuesses);  //THIS IS COMPUTER GUESSES TOTAL. NOT JUST THE WRONG ONES
while (countWrongGuesses == 9) {
	reset();
}

//determine wins and loses with if/else statements 
if (keypushed.key === randomCompChoice) {
	console.log("User WIN");
	document.getElementById("wins").innerHTML = ("Wins: " + wins++);
	alert("YOU ARE PSYCHIC!"); 
	reset ();
		}

else if (countWrongGuesses % 9 === 0)
		{
		document.getElementById("loses").innerHTML = ("Loses: " + countLoses++);
		alert("You guessed wrong 9 times. Sorry! Try again!");
		reset(); }
	
else {}

}





//extra stuff if time: make it so the computer ONLY reads LETTER KEYS 

