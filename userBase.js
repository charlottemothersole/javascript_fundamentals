//   We'd now like to have a class UserBase that behaves like this:
//   > const userBase = new UserBase(users);
//   > userBase.count();
//   3
//   > userBase.getNames();
//   [ 'Uma', 'Josh', 'Ollie' ]
//   > userBase.getIntroductions();
//   [
//     'Hi, my name is Uma',
//     'Hi, my name is Josh',
//     'Hi, my name is Ollie'
//   ]
//   To complete this exercise, you will have to:
//   declare a new class and its methods.
//   use what you've previous learned on working with arrays, like the map method.
//   call methods from the User class.
  
class UserBase {
    constructor(users) {
        this.users = users;
    }

    count() {
        return this.users.length;
    }

    getNames() {
        return this.users.map((user) => user.getName())
    }

    getIntroductions() {
        return this.users.map((user) => user.getIntroduction())
    }
}
const User = require('./user.js');
const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
];
const newUserBase = new UserBase(users);
console.log(newUserBase.count());
// // 3
console.log(newUserBase.getNames());
// // [ 'Uma', 'Josh', 'Ollie' ]
console.log(newUserBase.getIntroductions());
// // [
//   'Hi, my name is Uma',
//   'Hi, my name is Josh',
//   'Hi, my name is Ollie'
// ]

// module.exports = userBase;