const Candy = require('./candy.js');
const ShoppingBasket = require('./shoppingBasket.js');
const candy = new Candy('Mars', 4.99);
const basket = new ShoppingBasket();

console.log(basket.getTotalPrice());
console.log(basket.addItem(candy));
console.log(basket.getTotalPrice());
console.log(basket.addItem(new Candy('Skittle', 3.99)));
console.log(basket.addItem(new Candy('Skittle', 3.99)));
console.log(basket.getTotalPrice());