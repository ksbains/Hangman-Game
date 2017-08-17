$(document).ready(function() {
var wins = 0;
var gLeft = 5;
var corWord = ["_","_","_","_","_"];
var  guessed = [];
var correct = 0;
var dict = ["which","there","their","about","would","these","other","words","could","write","first","water","after","where"];
var rnum = Math.floor(Math.random() * dict.length ) + 1;
var victories = document.getElementById("wins");
console.log("victories",document);
victories.innerHTML = wins;

var remainGuesses = document.getElementById("gLeft");
remainGuesses.innerHTML = gLeft;

var currentWord = document.getElementById("currWord");
currentWord.innerHTML = corWord;

var userGuesses = document.getElementById("guessed");
userGuesses.innerHTML = guessed;
 var temp = 0;
 var dups = 0; 
 function init (letter, word){
 	for(var i = 0; i < word.length; i++){
 		if(word[i] === letter){
 			return true;
 		}
 	}
 	return false;
 }

 function startOver(){
	 corWord = ["_","_","_","_","_"];
	 guessed = [];
	 correct = 0;
	 temp = 0;
     dups = 0;
	 rnum = Math.floor(Math.random() * dict.length );
	 word = dict[rnum];
	 // var word = dict[Math.floor(Math.random(guesses.length))];
	 console.log("the word is " + word);
	 gLeft = word.length;
 }
document.onkeyup = function(event) {
        
        
        console.log("the random number is: " + rnum);
        // this line of code will take the random number and then convert it to a character
        var word = dict[rnum];
        // var word = dict[Math.floor(Math.random(guesses.length))];
        console.log("the word is " + word);
        
        // Captures the key pressed by the user, converts it to lowercase, and saves it to a variable.
        var response = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("the response is " + response);
        
        for(var i = 0; i < word.length; i++){
        	if (response === word[i]) {
                dups++;
        		if(!init(response,corWord)){
                    correct++;
                }
                corWord[i] = response;
        		if(correct === word.length){
        			console.log("startOver: WIN");
        			startOver();
        			wins++;
        		}
        	}
        }
        if(dups > correct){
            correct = dups;
        }
        if(correct == temp){
        	
        	if(init(response,guessed)){
        		gLeft++;
        	}
        	else if(init(response,corWord)){
        		gLeft++;
                console.log("got something right and choosing it again");	
        	}
            else{
                guessed.push(response);
            }
            gLeft--;
            if(gLeft == 0){
                startOver();
                console.log("startOver: LOSE");
            }
        }
        if(correct > temp){
        	if(!init(response,guessed)){
        		temp = correct;	
        	}
        }
        victories.innerHTML = wins;
        remainGuesses.innerHTML = gLeft;
        userGuesses.innerHTML = guessed;
        currentWord.innerHTML = corWord;
    }
});