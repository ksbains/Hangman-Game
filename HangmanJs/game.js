var word = require('./word.js');
var currWord = new word();

var game = function (){
    this.currentWord = null;
    this.validGuesses = [];
    this.invalidGuesses = [];
    this.maxInvalidGuesses = 5;
}

game.prototype.start = function(word) {
	this.currentWord = currWord.setRandomWord();
	console.log("the game is a foot " + this.currentWord.word);

};

game.prototype.guessLetter = function (letter, cb) {
    // Has letter already been guessed?
    if (this.validGuesses.indexOf(letter) !== -1 || this.invalidGuesses.indexOf(letter) !== -1) {
        console.log("the letter " + letter + " has already been guessed, try something else");
        cb();
    }
    // Is letter in word?
        if (this.currentWord.word.indexOf(letter) !== -1) {
        //console.log("the currentWord inside of guessLetter is: " + this.currentWord.word);
            this.validGuesses.push(letter);
        } else {
        this.invalidGuesses.push(letter);
                // Did they Lose?
        if (this.invalidGuesses.length === this.maxInvalidGuesses){
            this.gameOver();
        }
        }
    this.display(cb);
};

// game.prototype.guessLetter = function (letter, cb) {
// 	// Has letter already been guessed?
// 	console.log("before");
// 	console.log(this.validGuesses);
// 	console.log("after");

// 	if (this.validGuesses.indexOf(letter) !== -1 || this.invalidGuesses.indexOf(letter) !== -1) {
// 		console.log("the letter " + letter + " has already been guessed, try something else");
// 		return;
// 	}
// 	// Is letter in word?
// 	console.log("the currentWord inside of guessLetter is: " + this.currentWord.word);
// 	if(this.in(letter, this.currentWord.word)){
// 		this.validGuesses.push(letter);
// 		this.display(cb);
// 	}else{
// 		this.invalidGuesses.push(letter);
// 		if(this.invalidGuesses.length === this.maxInvalidGuesses){
// 			this.gameOver();
// 		}
// 		this.display(cb);
// 	}
// };

game.prototype.display = function(cb) {
	// Iterate over word letters
	var toDisplay = [];
	console.log("inside to display the currentWord is: " + this.currentWord.word);
	for(var i = 0; i < this.currentWord.word.length; i++){
		if(!this.in1(this.currentWord.word[i],this.validGuesses)){
			toDisplay[i] = "_";
		}else{
            toDisplay[i] = this.currentWord.word[i];
        }
	}
	console.log(toDisplay.toString());
	cb();
};

game.prototype.in1 = function(char, arr) {
	//console.log("the in function has been called. the arr is: ");
	//console.log(arr);
	if(arr.length === 0){return false;}

	for(var i = 0; i < arr.length; i++){
		if(arr[i] === char){
			return true;
		}
	}
	return false;
};
game.prototype.in = function(char, arr) {

    if(arr.length === 0){return false;}
        // returns (true|false) checking if char is in arr
        return (arr.indexOf(char) !== -1);
};

game.prototype.gameOver = function() {
	// hen the game i over
	if(this.invalidGuesses.length === this.maxInvalidGuesses){
		console.log("you got it wrong!! net word.");
		this.start();
	}
	console.log("You got it right!! good job!!");
	
};

module.exports = game;