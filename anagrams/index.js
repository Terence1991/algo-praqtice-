// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const charMap1 = buildCharMap(stringA)
    const charMap2 = buildCharMap(stringB)

    if(Object.keys(charMap1).length !== Object.keys(charMap2).length) {
        return false;
    } else {
        for (let char in charMap1) {
            if (charMap1[char] !== charMap2[char]) {
                return false 
            } else {
                return true 
            }
        }
    }
}

function buildCharMap(str) {
    const charMap = {};

    for(let char of str.replace(/[^\w]/).toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}


module.exports = anagrams;
