// Implement the classes Candy and ShoppingBasket so you can require them into node and get the following behaviour:
// > const candy = new Candy('Mars', 4.99);
// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99

class Candy {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

module.exports = Candy;