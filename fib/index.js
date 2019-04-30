// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // allways initilize counter for start

    let fibArray = [0, 1]

    for(let i = n; i <= n; i++) {
        const a = fibArray[i - 2]
        const b = fibArray[i- 1]
        fibArray.push(a + b);
    }
    return fibArray[n];
}

module.exports = fib;
