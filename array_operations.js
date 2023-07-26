// Declare a function checkLength that takes a phone number (as a string) as argument, and returns 
// true if this phone number contains 10 characters or less.
// Now declare a function filterLongNumbers that takes an array of phone numbers. This function should 
// return only numbers that contain 10 characters or less. It should make use of the function checkLength 
// written previously.

// const checkLength = (phoneNumber) => {
//     let arr = phoneNumber.split('');
//     return arr.length <= 10;
// }

// const filterLongNumbers = (phoneArray) => {
//     return phoneArray.filter(checkLength);
// }

// module.exports = filterLongNumbers;

// > const filterLongNumbers = require("./filterLongNumbers.js");
// > const numbers = [
//   '1763687364',
//   '4763687363',
//   '7867867862',
//   'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
// ];

// > filterLongNumbers(numbers);
// [ '1763687364', '4763687363', '7867867862' ]

// > filterLongNumbers(['4763687363', '7867867862']); // no number to filter out
// [ '4763687363', '7867867862' ]

// > filterLongNumbers([])
// [ ]

// --------------------

// Your friend now would you like to also generate a personalised message for the SMS promotion. Along with the phone numbers, you also now have a list of names:
// To complete this exercise you'll have to:
// create a function that takes a single name and generate the correct message for it.
// use Array's map method to generate the list of personalised messages using this function.
// Write a function generateMessages that takes an array of names and returns an array of personalised messages for each name. For example, when given the array above, the function should return an array with the first element being the string 'Hi Anna! 50% off our best candies for you today!', the second element the string 'Hi Laura! 50% off our best candies for you today!', and so on.
// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

// const generateMessage = (names) => {
//     return names.map((name) => {
//         return `Hi ${name}! 50% off of our best candies for you today!`;
//     })
// }

// console.log(generateMessage(names));

// -----------------

// Modify the function generateMessages so it uses this new structure and write the correct discount percentage in each message.

const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 }
  ];

const generateMessage = (namesAndDiscounts) => {
    return namesAndDiscounts.map((name, discount) => {
        console.log(name['discount']);
        return `Hi ${name['name']}! ${name['discount']}% off of our best candies for you today!`;
    })
}

console.log(generateMessage(namesAndDiscounts));
