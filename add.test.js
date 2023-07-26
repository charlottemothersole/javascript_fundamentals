const add = require('./add.js');
const multiply = require('./multiply.js');


describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2, 2)).toBe(4);
      });
  });


describe('multiply', () => {
    it('multiplies 2 and 2', () => {
        expect(multiply(2, 2)).toBe(4);
    });
});