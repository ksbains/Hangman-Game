var game = {
	wins: 0,
	gLeft: 5,
	correct: 0,
	losses: 0,
	corWord: ["_","_","_","_","_"],
	guessed: [],
	word: "",
	dict: ["which","there","their","about","would","these","other","words","could","write","first","water","after","where"]
};

function init(letter, word){
	for(var i = 0; i<word.length; i++){
		if(word[i] === letter){
			return true;
		}
	}
	return false;
}

function whereitis(letter, word){
	var loc = [];
	for(var i = 0; i<word.length; i++){
		if(word[i] == letter){
			loc.push(i);
		}
	}
	return loc;
}

function startOver(bool) {
	if(bool == true){
		game.wins++;
	}
	if(bool == false){
		game.losses++;
	}
	game.correct = 0;
	game. corWord = ["_","_","_","_","_"];
	game.guessed = [];
	var rnum = Math.floor(Math.random() * game.dict.length);
	game.word = game.dict[rnum];
	game.gLeft = game.word.length;
}

$(document).ready(function() {

	startOver();
	// DECLARE AND SET ALL THE VARIABLES TO BE DISPLAYED
	var victories = document.getElementById("wins");
	victories.innerHTML = game.wins;

	var defeats = document.getElementById("losses");
	defeats.innerHTML = game.losses;

	var remainGuesses = document.getElementById("gLeft");
	remainGuesses.innerHTML = game.gLeft;

	var currentWord = document.getElementById("currWord");
	currentWord.innerHTML = game.corWord;

	var userGuesses = document.getElementById("guessed");
	userGuesses.innerHTML = guessed;

	// on the key up the game will start
	document.onkeyup = function(event) {
		// logs the word and response
		console.log("the word is " + game.word);
		var response = String.fromCharCode(event.keyCode).toLowerCase();
		console.log("the response is " + response);

		// if the response is in the word and not already guessed
		// then get an array of the loctions the letter is in the word
		// then use those locatoins to replace the underscoers with the letter in corWord
		// then increase correct by the number of times the letter appears in the word
		// if the number of correct responses is === to length of the word 
		// then the game is over and you get that W. 
		// else  
		if(init(response, game.word) && !init(response, game.corWord)){
			var loc = whereitis(response, game.word)
			for(var j = 0; j<loc.length; j++){
				game.corWord[loc[j]] = response;
			}
			game.correct += loc.length;
			if(game.correct === game.word.length){
				startOver(true);
			}
		}else{
			if(!init(response, game.guessed)){
				game.guessed.push(response);
				game.gLeft--;
				if(game.gLeft == 0){
					startOver(false);
				}
			}
		}
		defeats.innerHTML = game.losses;
		victories.innerHTML = game.wins;
        remainGuesses.innerHTML = game.gLeft;
        userGuesses.innerHTML = game.guessed;
        currentWord.innerHTML = game.corWord;
	};
});