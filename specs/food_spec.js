const assert = require('assert')
const Food = require('../food.js');

describe('Food', function () {
    let food;
    beforeEach(function () {
        food = new Food('Carrot cake', 10);
    });

    it('should have a name', function () {
        const actual = food.name;
        assert.strictEqual(actual, 'Carrot cake');
    });

    it('should have a replenishment value', function () {
        const actual = food.replenishmentValue;
        assert.strictEqual(actual, 10);
    });


});