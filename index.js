// The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses
var inquirer = require("inquirer");
var prompt = require("prompt");
var Word = require("./word");
var guesses = 10;
var input = process.argv[2];
var word = new Word();

var allWords = ["electricity", "technology", "inventions", "discovery", "scientific", "mathematical"];

var newGame = function() {  
  var selectedWord = allWords[Math.floor(Math.random() * allWords.length)];  
  var wordPos = allWords.indexOf(selectedWord);
  if (allWords.length < 1) {
          alert("Good job!");   
      } else {
          allWords.splice(wordPos, 1);
      } 
  // selectedWord = new Word(); 
  word.returnString(selectedWord);
}

var askQuestions = function() {
  inquirer.prompt([
      {
        name: "guess",
        message: "Press a letter to make a guess"
      }
  ]).then(function(answers) {
      var character = answers.guess;
        word.takesChar(character);
        guesses--;
  });
  }


newGame();
askQuestions();
