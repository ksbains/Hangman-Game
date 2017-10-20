var word = require('./word.js');

var game = function (){
	currentWord: null;
	validGuesses: [];
	invalidGuesses: [];
	maxInvalidGuesses: 5;
}

game.prototype.start = function(word) {
	this.currentWord = word.setRandomWord();

};

game.prototype.guessLetter = function (letter, cb) {
	// Has letter already been guessed?
	if(game.in(letter, game.validGuesses) || game.in(letter, invalidGuesses)){
		console.log("the letter " + letter + " has already been guessed, try something else");
		return;
	}
	// Is letter in word?
	if(game.in(letter, game.currentWord)){
		game.validGuesses.push(letter);
		game.display(cb);
	}else{
		game.invalidGuesses.push(letter);
		if(game.invalidGuesses.length === game.maxInvalidGuesses){
			game.gameOver();
		}
		game.display(cb);
	}
};

game.prototype.display = function(cb) {
	// Iterate over word letters
	var toDisplay = game.currentWord;
	for(var i = 0; i < game.currentWord.length; i++){
		if(!game.in(game.currentWord[i],game.validGuesses)){
			toDisplay[i] = "_";
		}
	}
	console.log(toDisplay);
	cb();
};

game.prototype.in = function(char, arr) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === char){
			return true;
		}else{
			return false;
		}
	}
};

game.prototype.gameOver = function() {
	// hen the game i over
	if(game.invalidGuesses.length === game.maxInvalidGuesses){
		console.log("you got it wrong!! net word.");
		game.start();
	}
	console.log("You got it right!! good job!!");
	
};

module.exports = game;