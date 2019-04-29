// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// recursive solution
function steps(n, row = 0, stair = '') {
    //base case one when it 
    //will break out of function
    //when it is called
    if (n === row) {
        return;
    }

    // string is empy so its fine 
    // this gets triggered last. Keeps going 
    if (n === stair.length) {
        console.log(stair)
       return steps(n, row + 1)
    }

    if(stair.length <= row) {
        //this trigger the else clause
        // adds space to row and call function again 
        //Once the length of stair equal paramter call it will run again 
        stair += '#'
    } else {
        stair += ' '
    }
    steps(n, row, stair)
}


// function steps(n) {

//     //process intire row 
//     for (let row = 0; row < n; row++) {
//         // make sure it is let cause let is mutable
//         let stair = ''
//         //nested for loop to inersect both row and column
//         for (let column = 0; column < n; row++) {
//             if(column <= row) {
//                 stair += "#"
//             } else {
//                 stair += ' '  
//             }
//         }
//         //console.log in for loop because you want 
//         // it to run in cunjunction with forloop
//         console.log(stair)
//     }
// }


module.exports = steps;

function pryamid() {
    const midPoint = Math.floor((2 * n - 1) / 2);
   
    for (let row = 0; row < n; row++) {
        let level = ""
        
        for(let column = 0; column < 2 * n -1; column++) {
            if(midPoint - row <=  column && midPoint + row >= column) {
                level += '#'
            } else {
                level += ' '
            }
        }
        // make sure to be inside of forloop so it runs/ not return statment wil fuck it uo
        console.log(level)
    }
}

console.log(pryamid(3))
