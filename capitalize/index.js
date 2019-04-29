// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const result = str[0].toUpperCase()
    // initialize counter at 1 so it doesent count first letter 
    for (let i = 1; i < str.length; i++) {
        // how to look let on a loop
        if (str[i - 1] === ' ') {
         result += str[i].toUpperCase()
        } else {
            result += str[i]
        }
    }
    return result
}





// function capitalize(str) {
//     const words = [];
//     str.split(' ').forEach((word) => {
//         //slice everything after first index.
//         //Split by space to get words rather than individual characters
//       words.push(toUpperCase(word[0]) + word.slice(1))
//     })
//     // dont forget to  returned joined as you split them
//    return words.join(' ')
// }
module.exports = capitalize;
