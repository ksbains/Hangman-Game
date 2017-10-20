var inquirer = require("inquirer");
var game = require ('./game.js');
var currGame = new game();
currGame.start();
//currGame.start();
// Created a series of questions

function prompt(){
  inquirer.prompt([
    {
      type: "input",
      name: "letter",
      message: "Guess a letter?"
    },
  ]).then(function(response) {
    console.log("the response is: " + response.letter);
    if (response.hasOwnProperty('letter') && typeof response.letter === 'string' && response.letter.length === 1){
      currGame.guessLetter(response.letter[0], prompt);
    }else{
      console.log("enter only one letter plz");
      prompt();
    }
  });
};

function start(){
  inquirer.prompt([
     {
      type: "confirm",
      name: "start",
      message: "would you like to play the game?"
    }
  ]).then(function(response){
    if(response.confirm){
      //console.log("The game is a foot!");
      prompt();
    }
  });
};

//start();
prompt();

