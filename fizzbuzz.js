
const fizzBuzz = (n) => {
    if(n % 5 === 0 && n % 3 === 0) {
        return 'fizzbuzz'
    } else if(n % 3 === 0) {
        return 'fizz'
    } else if(n % 5 === 0) {
        return 'buzz'
    } else {
        return n
    }
}
// console.log(fizzBuzz(3)); 
// // 'Fizz'
// console.log(fizzBuzz(5));
// // 'Buzz'
// console.log(fizzBuzz(8));
// // 8
// console.log(fizzBuzz(15));
// // 'FizzBuzz'
// console.log(fizzBuzz(18));
// // 'Fizz'
// console.log(fizzBuzz(20));
// // 'Buzz'
// ------------------------------------
// Write a function fizzbuzzUntil that accepts a number. This function should use a loop to loop 
// through all numbers from 1 to the given one, call the fizzBuzz function for the current number 
// and print the result.
// You should get the following output:
// // In node
// const fizzbuzzUntil = require('./fizzbuzzUntil');
// fizzbuzzUntil(10);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz

const fizzBuzzUntil = (n) => {
    for(let i = 0 ; i <= n ; i++) {
        console.log(fizzBuzz(i));
    }
}


module.exports = fizzBuzz;