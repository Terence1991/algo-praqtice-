// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('')

    // Math.sign(n) to check if n is negative or positive 
    // timeesing it by itself will return proper value
    return parseInt(reversed) * Math.sign(n)
}


module.exports = reverseInt;




// simple solution 
// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('')
//     if(n < 0) {
//         return parseInt(reversed) * -1;
//     } else {
//         return  parseInt(reversed)
//     }
//     }
// console.log(reverseInt(55))
