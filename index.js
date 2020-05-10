// The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it

// Prompts the user for each guess and keeps track of the user's remaining guesses
var inquirer = require("inquirer");
var prompt = require("prompt");
var Word = require("./word");
var guesses = 10;
var word = new Word();

var allWords = ["electricity", "technology", "inventions", "discovery", "scientific", "mathematical", "theory", "experiment"];
var selectedWord = allWords[Math.floor(Math.random() * allWords.length)];

var newWord = function () {
  console.log(selectedWord);
  var wordPos = allWords.indexOf(selectedWord);
  if (allWords.length < 1) {
    console.log("Good job!");
  } else {
    if (guesses > 0) {
    allWords.splice(wordPos, 1);
    word.returnString(selectedWord);
    askQuestions();
    guesses--;
  }
}
// else {
//   console.log("You're out of guesses");
// }
}

var askQuestions = function () {
  inquirer.prompt([
    {
      name: "guess",
      message: "Your guess is:",
    }
  ]).then(function (answers) {
    var character = answers.guess;
    word.takesChar(character);
    console.log("Guesses remaining:", guesses)
  })
  .catch(error => console.log(error));
}

var newGame = function() {
  var guesses = 10;
  var allWords = ["electricity", "technology", "inventions", "discovery", "scientific", "mathematical"];
    inquirer.prompt({
            name: "game",
            type: "confirm",
            message: "\nWould you like to play a game?\n"
        })
        .then(function (answer) {
            if (answer.game === true) {
              console.log("The category is science. Press a letter to make a guess!")
                newWord();
            } else {
                console.log("Ok, bye!");
            }
        });
};

newGame();
