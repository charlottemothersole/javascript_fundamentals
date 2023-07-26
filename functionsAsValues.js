// const doubleNumber = (n) => 2*n
// console.log(doubleNumber)

// const simpleCalculation = doubleNumber
// console.log(simpleCalculation)

// Declare a function lowercaseMessage that returns the lowercase version of the given string.
// Declare a function transform that behaves like the one above:
// takes one string and one function as arguments
// calls the function on the given string.
// Call transform by giving it the string 'WHY ARE YOU SHOUTING?' and the function lowercaseMessage. 
// It should return a lowercase version of the message ('why are you shouting?')

// const lowerCaseMessage = (string) => {
//     return string.toLowerCase();
// }

// const transform = (string, transformFunction) => {
//     return transformFunction(string);
// }

// console.log(transform('WHY ARE YOU SHOUTING?', lowerCaseMessage));



// You've previously learned how to declare a function, and you've also seen that a function can be 
// assigned just like a variable. To complete this exercise, you'll have to pass a function as an 
// argument to another function.
// Declare a function notifyByEmail that accepts an email address as argument and returns the string 
// 'Email sent to: <EMAIL>'.
// Declare a function notifyByText that accepts a phone number (as a string) as argument and returns 
// the string 'Text sent to: <PHONE NUMBER>'.
// Now declare a generic function notify that accepts a first string argument (either an email or a 
// phone), and the function to use in second argument. This function should only rely on calling the 
// function passed in second argument, not declare a string by itself.
// Use the function notify with the two previous functions to:
// send an email to hello@makers.tech.test and get the expected output.
// send a text to +10000000000 and get the expected output.

const notifyByEmail = (email) => {
    return `Email sent to: ${email}`    
}

const notifyByText = (phoneNumber) => {
    return `Text sent to: ${phoneNumber}`
}

const notify = (details, contactMethodFunction) => {
    return contactMethodFunction(details);
}

console.log(notify('hello@makers.tech.test', notifyByEmail));
console.log(notify('+10000000000', notifyByText));
