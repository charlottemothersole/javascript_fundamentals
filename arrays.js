// Print the array's length.
// Print the second name of the array.
// Create a new array by adding a new name to the existing array.

// let myArray = ['Sam','Oli','Rich'];
// console.log(myArray.length);
// console.log(myArray[1]);
// newArr = myArray.concat('Me');
// console.log(myArray);

// -----------------------------

// Create an array of all numbers from 1 to 10. Calculate the sum of all these numbers by looping 
// through the array.
// You can use the method forEach to iterate over each element.
// const arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0;

// arr.forEach((n) => {
//     sum +=n;
// })
// console.log(sum);

// --------------------------------

// You are helping your friend, who owns a candies business, with their website. Every order placed on 
// the website gets assigned an order ID, such as 1274.
// Your friend would like to create batches of five order IDs. They ask you if you could give a hand 
// and write a small program to do this.
// To complete this exercise you will have to find out:
// how to add elements to an array with the .concat method
// how to get the length of an array
// Questions
// Declare a function addToBatch that takes two arguments, an array and a number, and returns a new 
// array by adding the number to the array.
// Now, make sure this function does not add the number if the array's length is already 5 or greater 
// — it should just return the array untouched in that case.

const addToBatch = (arr, n) => {
    if(arr.length < 5) {
        return arr.concat(n);
    } else {
        return arr;
    }
    
}

module.exports = addToBatch;