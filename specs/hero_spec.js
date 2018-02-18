const assert = require('assert')
const Hero = require('../hero.js')
const Food = require('../food.js')

describe('Hero', function() {
    let hero;
    let food;
    let favouriteFood;

    beforeEach(function() {
        hero = new Hero('Guybrush Threepwood', 'Carrot cake');
        food = new Food('jawbreakers',5);
        favouriteFood = new Food('Carrot cake',10);
    });

    it('should have a name' , function () {
        const actual = hero.name;
        assert.strictEqual(actual, 'Guybrush Threepwood');
    });

    it('should have a favourite food', function() {
        const actual = hero.favouriteFood;
        assert.strictEqual(actual, 'Carrot cake');
    });
    
    it('should have a health level', function() {
        const actual = hero.health;
        assert.strictEqual(actual, 0);
    });

    it('can talk', function() {
        const actual = hero.talk();
        assert.strictEqual(actual, 'My name is: '+ hero.name);
    });

    it('has a collection of tasks to complete', function() {
        const actual = hero.tasks;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to eat', function() {
        const healthValueBeforeEating = hero.health;
        assert.strictEqual(healthValueBeforeEating, 0);
        hero.eat(food);
        const healthValueAfterEating= hero.health;
        assert.strictEqual(healthValueAfterEating, healthValueBeforeEating + food.replenishmentValue);
    });

    it('eating favourite food gives increased replenishment', function() {
        const healthValueBeforeEating = hero.health;
        assert.strictEqual(healthValueBeforeEating, 0);
        hero.eat(favouriteFood);
        const healthValueAfterEating = hero.health;
        assert.strictEqual(healthValueAfterEating, healthValueBeforeEating + (favouriteFood.replenishmentValue*1.5));
    });

});
