// Requires letter.js
var Letter = require("./letter");
// Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting 
// to guess.
var Word = function(str){
    // An array of new Letter objects representing the letters of the underlying word
        this.wordArray = str.split("");
        console.log(this.wordArray);
        this.string = "";
       // A function that returns a string representing the word. 
        this.returnString = function(playerInput){
        // This should call the function on each letter object (the first function defined in Letter.js) 
        // that displays the character or an underscore and concatenate those together.
            for (var i = 0; i < this.wordArray.length; i++) {
                var newLetter = new Letter(playerInput, this.wordArray[i]);
                this.string += newLetter.toString() + " ";
            }
            console.log("\n" + this.string);
        }
    // A function that takes a character as an argument and calls the guess function on each 
    // letter object (the second function defined in Letter.js)
    this.takesChar = function(playerInput){
        for (var i = 0; i < this.wordArray.length; i++) {
            var newLetter = new Letter(playerInput, this.wordArray[i]);
            this.string += newLetter.checkLetter() + " ";
        }
        console.log("\n" + this.string);
    }
}

module.exports = Word;