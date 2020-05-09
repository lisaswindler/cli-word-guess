// The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses
var inquirer = require("inquirer");
var prompt = require("prompt");
var Word = require("./word");
var guesses = 10;
var input = process.argv[2];
// var word = new Word();

var wordArray = ["electricity", "technology", "inventions", "discovery", "scientific"];

var askQuestions = function() {
  inquirer.prompt([
      {
        name: "guess",
        message: "Press a letter to make a guess"
      }
  ]).then(function(answers) {
      var letterGuess = new Word(answers.name);
        guesses--;
  });
  }

var newGame = function() {  
    var wordChoice = wordArray[Math.floor(Math.random() * wordArray.length)];  
    var wordPos = wordArray.indexOf(wordChoice);
    if (wordArray.length < 1) {
            alert("Good job!");   
        } else {
            wordArray.splice(wordPos, 1);
        } 
    console.log(wordChoice);   
}
newGame();
askQuestions();
returnString("happybirthday");
