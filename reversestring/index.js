// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    str.split('').reduce((reversed, character)=>  character + reversed, '')
}

reverse('apple')
module.exports = reverse;

// solution number 1#
// function reverse(str) {
//     return str.split('').reverse().join('')
  
//   }



// solution 2
// function reverse(str) {
//     let reversed = ''
//     for (let character of str) {
//         reversed = character + reversed; 
//     }
//     return reversed
// }

// solution 3
// function reverse(str) {
//     str.split('').reduce((reversed, character)=> {
//         return character + reversed;
//     }, '')
// }
