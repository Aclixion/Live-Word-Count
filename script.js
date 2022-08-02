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


/*
This function counts the number of words in a string. In this case, a word is defined as a group of consecutive 
alphabetical letters separated by characters that aren't letters. To count the number of words, the number of
word beginnings is counted, which is equal to the number of words.
*/
function numWords(string) {
    // Number of words
    let numWords = 0;
    // Iterate through all characters
    for (let currentIdx = 0; currentIdx < string.length; currentIdx++) {
        // If current character is a letter
        if (isLetter(string.charAt(currentIdx))) {
            /*
            If current character is first character or if previous character isn't a letter, this indicates the presence
            of a word.
            */
            if (currentIdx === 0 || !isLetter(string.charAt(currentIdx - 1))) {
                numWords++;
            }
        }
    }
    return numWords;
}