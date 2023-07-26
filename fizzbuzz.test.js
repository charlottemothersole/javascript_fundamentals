const fizzBuzz = require('./fizzbuzz.js');

describe('fizzbuzz loop function', () => {
    it('calling with 3 returns "fizz" string', () => {
        expect(fizzBuzz(3)).toBe('fizz');
    });
    it('calling with 5 returns "buzz" string', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    });
    it('calling with 8 returns "8" int', () => {
        expect(fizzBuzz(8)).toBe(8);
    });
    it('calling with 15 returns "fizzbuzz" string', () => {
        expect(fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('calling with 18 returns "fizz" string', () => {
        expect(fizzBuzz(18)).toBe('fizz');
    });
    it('calling with 20 returns "buzz" string', () => {
        expect(fizzBuzz(20)).toBe('buzz');
    });
});