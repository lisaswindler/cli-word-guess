// Letter.js does not require any files
// Letter.js: Contains a constructor, Letter. 
// This constructor should be able to either display an underlying character or a 
// blank placeholder (such as an underscore), depending on whether or not the user 
// has guessed the letter.
var Letter = function(trueChar) {
    // A string value to store the underlying character for the letter
    this.trueChar = trueChar;
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    // Display function
    this.toString = function(){
        // returns the underlying character if the letter has been guessed
        realWord = trueChar;
        if (this.guessed === true) {
            return this.trueChar;
        } else {
            // or an underscore if the letter has not been guessed
            return "_ ";
        }
    }  
    // A function that takes a character as an argument and checks it against the underlying 
    // character, updating the stored boolean value to true if it was guessed correctly
    this.checkLetter = function(character){
        console.log("You guessed:", character);
        if (realWord.includes(character)) {
            this.guessed = true;
            console.log("Correct");
        } else {
            console.log("Incorrect");         
        }
        // return this.guessed;
    }
}

module.exports = Letter;