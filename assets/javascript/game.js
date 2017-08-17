$(document).ready(function() {
var wins = 0;
var gLeft = 5;
var corWord = ["_","_","_","_","_"];
var  guessed = ["_","_","_","_","_"];
var correct = 0;
// function readTextFile(dict.txt)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", dict.txt, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 dict = rawFile.responseText;
//             }
//         }
//     }
//     rawFile.send(null);
// }
var dict = ["which","there","their","about","would","these","other","words","could","write","first","water","after","where"];
// this code will choose a random word from dict. 
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

document.onkeyup = function(event) {
        
        
        console.log("the random number is: " + rnum);
        // this line of code will take the random number and then convert it to a character
        var word = dict[rnum];
        // var word = dict[Math.floor(Math.random(guesses.length))];
        console.log("the word is " + word);
        
        // Captures the key pressed by the user, converts it to lowercase, and saves it to a variable.
        var response = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("the response is " + response);
        var temp = correct;
        var loc = [];
        for(var i = 0; i < word.length; i++){ 
        // if the letter randomly choosen is the same the user selects
        if (word[i] === response) {
          loc.push(i);
          // increase the correct by 1
          correct++;
          if(correct === word.length){
            // reset the correct variable. 
            correct = 0;
            temp = 0;
            // increent wins
            wins++;
            // reset the guesses left
            gLeft = 5;
            // reset the guesses array
            guessed = ["_","_","_","_","_"];
            // reset the number for new word
            word = dict[Math.floor(Math.random(guesses.length))];
            // log to console for maintence
            console.log("the NEW word is " + word);
            corWord = ["_","_","_","_","_"];
          }
          else{
            // changing the underscore to the letter
            console.log("your response is in the word, now placing: " + response + " into corWord");
            corWord[i] = word[i];
            console.log("corWord is: " + corWord);
          }
        }
      }
        // if(correct == 0){
        if(correct >= temp){
          temp++;
          // console log for maintence
          console.log("the response is not in the word");
          // decrement the guesses left
          gLeft--;
          guessed[temp] = response;
          //if no more guesses left
          if(gLeft === 0){
            console.log("there are no more guesses left");
            // reset the correct
            correct = 0;
            // reset the guesses left
            gLeft = 5;
            // reset the guesses array
            guessed = [];
            // reset the corWord
            corWord = [];
            // reset the new word
            // reset the number for new word
            word = dict[Math.floor(Math.random(dict.length))];
            // log to console for maintence
            console.log("the NEW word is " + word);

          }
          else{
            console.log("guesses remaining: " + gLeft);
            console.log(guessed);
          }
        }

          victories.innerHTML = wins;
          remainGuesses.innerHTML = gLeft;
          userGuesses.innerHTML = guessed;
          currentWord.innerHTML = corWord;
      };
});