const wordTarget = document.querySelector(".word-target-entry");
const textField = document.querySelector(".text-entry");
const wordDisplay = document.querySelector(".num-words-display");

function isLetter(character) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    return alphabet.includes(character.toLowerCase());
}