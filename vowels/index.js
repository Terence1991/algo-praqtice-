// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  
  return matches ? matches.length : 0
}

module.exports = vowels;


// basic solution 
// function vowels(str) {
//     let counter = 0;
//     let checker = ['a', 'e', 'i', 'o', 'u']
//     str.toLowerCase().split('').forEach(element => {
//        if(checker.includes(element)) {
//            counter++
//        }         
//     });

//     return counter
// }
