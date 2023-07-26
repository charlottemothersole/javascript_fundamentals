const person = {
    name: 'Maxine',
    age: 32,
    address: {
      city: 'London',
      postcode: 'E1 123'
    },
    hobbies: ['writing', 'tennis', 'cooking']
  };

//   Print the value of the city attribute ('London').
//   Print the value of the second hobbies value ('tennis').

// console.log(person['address']['city']);
// console.log(person['hobbies'][1]);

// -------------------------


// Declare an object cohort that has the following properties:

// a string name (e.g 'May2022')
// a number id (e.g 1234)
// an array of student names
// Declare a function that accepts that object as argument and print a message with the following structure:

// <COHORT_ID> - <COHORT_NAME> - <NUMBER_OF_STUDENTS> students in this cohort

// let cohort = {
//     'Name':   'June2023',
//     'Id':           201,
//     'Names':        ['Charlotte', 'Sam', 'Oli'],
// }

// print_details = (cohort) => {
//     console.log(`${cohort['Id']} - ${cohort['Name']} - ${cohort['Names'].length} students in this cohort`);
// }

// print_details(cohort)



// how to use a class-based program
// sandwhich.add("bread")
// sandwhich.isValid() => true or false

// how to use a function-based program
// let sandwhich = []
// sandwhich = add(sandwhich, "bread")
// isValid(sandwhich)

// valid sandwhiches should have 1 or more layers between the bread
// if you're already doing TDD and want to practice, TDD it
// if you're already comfortable with TDD, build your own 'describe' and 'it' functions


const add = (sandwhich, ingredient) => {
    sandwhich.push(ingredient)
    return sandwhich
}

const isValid = (sandwhich) => {
    // begins and ends with "bread"
    // AND have something in between
    lastIndex = sandwhich.length - 1
    return sandwhich[0] === "bread" && sandwhich[lastIndex] === "bread" && sandwhich[1] != 'bread'
}

// script
let sandwhich = []
sandwhich = add(sandwhich, "bread")
sandwhich = add(sandwhich, "egg")
sandwhich = add(sandwhich, "bread")

console.log(sandwhich)

console.log(isValid(sandwhich))