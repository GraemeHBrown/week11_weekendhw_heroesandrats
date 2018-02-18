const assert = require('assert')
const Hero = require('../hero.js')

describe('Hero', function() {
    let hero;
    beforeEach(function() {
        hero = new Hero('Guybrush Threepwood', 'Carrot cake')
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
    })
});
