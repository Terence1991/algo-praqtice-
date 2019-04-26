// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    
    // helper variable 
    const charMap = {}
    //increment gradually 
    let max = 0
    let maxChar = ''
    
    // loop through string. if index of string exists in key of object increment it by one.
    // else/ it does not  asign it to just one
    for(let char of str) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    //once char map is built. Iterate through the object propertys.
    // if property excedes value of helper var of max. 
    // Asign max so it increments Gradually in conjucntion with the given string interation
    for (let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char]; 
            maxChar = char;
        }
    }
    return maxChar
}


module.exports = maxChar;
