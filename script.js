// Input for number of words to reach
const wordTarget = document.querySelector(".word-target-entry");
// Input for text
const textField = document.querySelector(".text-entry");
// Display for whether or not the target number of words has been reached
const wordDisplay = document.querySelector(".num-words-display");

// Checks whether or not a character is a letter from the English alphabet
function isLetter(character) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    return alphabet.includes(character.toLowerCase());
}