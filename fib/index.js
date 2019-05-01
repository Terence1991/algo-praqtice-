// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//recursive problem 
// how to improve runtime of fib if int asks?
// memoization: store the arguments of each 
// function call along with the result.
// if the the function is called again
// with the same arguments return the pre 
// computed results rather than running the 
// function again. 

function memoize(fn) {
    const cache = {}
    //make sure can recieve multiple arguments

    return function(...args) {
        //if something exists in 
        // cache object return it 
        if(cache[args]) {
            return cache[args]
        }

        const result = fn.apply(this, args)
        cache[args] = result
        return result;
    }

}


function slowFib(n) {
    if(n < 2) {
        return n
    }

    return fib(n - 1) + fib(n - 2);
}

module.exports = fib;



// function fib(n) {
//     // allways initilize counter for start

//     let fibArray = [0, 1]

//     for(let i = n; i <= n; i++) {
//         const a = fibArray[i - 2]
//         const b = fibArray[i- 1]
//         fibArray.push(a + b);
//     }
//     return fibArray[n];
// }
