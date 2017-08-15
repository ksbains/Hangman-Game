$(document).ready(function() {
var wins = 0;
var gLeft = 5;
var dict = [];
var corWord = [_,_,_,_,_];
var  guessed = [];
var correct = 0;

function readTextFile(dict.txt)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", dict.txt, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                dict = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

var victories = document.getElementById("wins");
console.log("victories",document);
victories.innerHTML = wins;

var remainGuesses = document.getElementById("gLeft");
remainGuesses.innerHTML = gLeft;

var currentWord = document.getElementById("currWord");
currentWord.innerHTML = corWord;

var userGuesses = document.getElementById("guessed");
userGuesses.innerHTML = guessed;

document.onkeyup = function(event) {
        
        // this code will choose a random number from 0-26
        
        
        // this line of code will take the random number and then convert it to a character
        var word = guesses[Math.floor(Math.random(guesses.length))];
        console.log("the word is " + word);
        // Captures the key pressed by the user, converts it to lowercase, and saves it to a variable.
        var response = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("the response is" + response);
        // if the letter randomly choosen is the same the user selects
        if (word[correct] === response) {
          // increase the correct by 1
          correct++;
          if(correct === word.length()){
            // reset the correct variable. 
            correct = 0;
            // increent wins
            wins++;
            // reset the guesses left
            gLeft = 5;
            // reset the guesses array
            guesses = [];
            // reset the number for new word
            word = dict[Math.floor(Math.random(guesses.length))];
            // log to console for maintence
            console.log("the NEW word is " + word);
          }
          else{
            // changing the underscore to the letter
            corWord[correct-1] = word[correct];
          }
        }


        else{
          // console log for maintence
          console.log("the letter is !== response");
          // decrement the guesses left
          gLeft--;
          //if no more guesses left
          if(gLeft === 0){
            console.log("there are no more guesses left");
            // reset the correct
            correct = 0;
            // reset the guesses left
            gLeft = 5;
            // reset the guesses array
            guesses = [];
            // reset the new word
            // reset the number for new word
            word = dict[Math.floor(Math.random(guesses.length))];
            // log to console for maintence
            console.log("the NEW word is " + word);

          }
          else{
            console.log("guesses remaining: " + gLeft);
            guesses.push(response);
            console.log(guesses);
          }
        }

          victories.innerHTML = "Wins: " + wins;
          defeats.innerHTML = "Losses: " + losses;
          remainGuesses.innerHTML = "Guesses Left: " + gLeft;
          userGuesses.innerHTML = "Your Guesses so far: " + guesses;
      };
});