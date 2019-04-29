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
    return cleanString(stringA) === cleanString(stringB)

}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}


// first solution 
// function anagrams(stringA, stringB) {
//     const charMap1 = buildCharMap(stringA)
//     const charMap2 = buildCharMap(stringB)
    
//     // first check if length of obect are same. If not it disqualifies them. 
//     // compare each object to eachother and  return true if character match 
//     if(Object.keys(charMap1).length !== Object.keys(charMap2).length) {
//         return false;
//     } else {
//         for (let char in charMap1) {
//             if (charMap1[char] !== charMap2[char]) {
//                 return false 
//             } else {
//                 return true 
//             }
//         }
//     }
// }

// // helper function to build char map for buth paramters 
// function buildCharMap(str) {
//     const charMap = {};
//     // loop over string.replace with index to take out
//     // spaces and bullshit letters(turn them in lowercase)
//     for(let char of str.replace(/[^\w]/).toLowerCase()) {
//         // assign key of obect identical value// 
//         //+ 1 to increment value or asign it one if its first ocurance in loop 
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }


module.exports = anagrams;
