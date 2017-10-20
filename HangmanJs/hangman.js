var inquirer = require("inquirer");
var currGame = require ('./game.js');
// Created a series of questions

function prompt(){
  inquirer.prompt([
    {
      type: "input",
      name: "letter",
      message: "Guess a letter?"
    },
  ]).then(function(response) {
    if(response.letter.length === 1){
      currGame.guessLetter(response.letter, prompt);
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
      console.log("The game is a foot!");
      game.start();
      prompt();
    }
  });
};

//start();
prompt();

