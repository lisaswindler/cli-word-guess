var Letter = require("./letter");
var letter = new Letter();

var Word = function(selectedWord){
// A function that returns a string representing the word. 
        this.returnString = function(selectedWord){
            this.wordArray = selectedWord.split("");
            this.string = "";
            letters = new Letter(this.wordArray);
        // This should call the function on each letter object (the first function defined in Letter.js) 
        // that displays the character or an underscore and concatenate those together.
            for (var i = 0; i < this.wordArray.length; i++) {
                this.string += letters;
            }
            console.log("\n" + this.string);
        }
    // A function that takes a character as an argument and calls the guess function on each 
    // letter object (the second function defined in Letter.js)
    this.takesChar = function(character){
        letter.checkLetter(character);
    }
}

module.exports = Word;