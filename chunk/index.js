// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // initiliaze empty arrary
   const chunked = []
    // loop over paramter
    array.forEach(element => {
        // find last emlement of empty arrary 
        const lastElement = chunked[chunked.length - 1]
        // if last element arrar does not exist or its size equals parameter
        if(!lastElement || lastElement.length === size) {
            // push the current index onto the array( remember to put the element in arrary brackets)
            chunked.push([element])
        } else {
            lastElement.push(element)
        }
    });
    return chunked; 
}

module.exports = chunk;
