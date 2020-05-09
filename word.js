// Requires letter.js
var Letter = require("./letter");
var letter = new Letter();
// Contains a constructor, Word that depends on the Letter constructor. 
// This is used to create an object representing the current word the user is attempting 
// to guess.
var Word = function(selectedWord){
// A function that returns a string representing the word. 
        this.returnString = function(selectedWord){
            this.wordArray = selectedWord.split("");
            this.string = "";
        // This should call the function on each letter object (the first function defined in Letter.js) 
        // that displays the character or an underscore and concatenate those together.
            for (var i = 0; i < this.wordArray.length; i++) {
                letters = new Letter(this.wordArray[i]);
                // this.string += newLetter.toString() + " ";
                this.string += letters;
                // this.string += "_ ";
            }
            
            console.log("\n" + this.string);
        }
    // A function that takes a character as an argument and calls the guess function on each 
    // letter object (the second function defined in Letter.js)
    this.takesChar = function(character){
        letter.checkLetter(character);
        // this.wordArray = letter.split("");
        // console.log(letters);
        // for (var i = 0; i < letters.length; i++) {
        //     var newLetter = new Letter(character);
        //     this.string += newLetter.checkLetter(character) + " ";
        //     console.log(character);
        // }
    //     console.log("\n" + this.string);
    }
}

module.exports = Word;