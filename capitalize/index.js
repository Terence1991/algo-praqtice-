// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const words = [];
    str.split(' ').forEach((word) => {
        //slice everything after first index.
        //Split by space to get words rather than individual characters
      words.push(toUpperCase(word[0]) + word.slice(1))
    })
    // dont forget to  returned joined as you split them
   return words.join(' ')
}

module.exports = capitalize;
