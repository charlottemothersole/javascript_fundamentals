// > const candy = new Candy('Mars', 4.99);
// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99
// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0
// > basket.addItem(candy);
// > basket.getTotalPrice();
// 4.99
// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.getTotalPrice();
// 12.97

class ShoppingBasket {
    constructor() {
        this.itemsInBasket = [];
    }
    addItem(item) {
        this.itemsInBasket.push(item);
    }
    getTotalPrice() {
        let totalPrice = 0;
        // console.log(this.itemsInBasket);
        this.itemsInBasket.map((item) => totalPrice += item.getPrice());
        return totalPrice;
    }
}

// const Candy = require('./candy.js');

module.exports = ShoppingBasket;