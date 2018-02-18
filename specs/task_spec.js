const assert = require('assert')
const Task = require('../task.js')

describe('Task', function() {
    let task;
    beforeEach(function () {
        task = new Task('Sword fighting',10, 10, 'pass one of the three trials of becoming a pirate');
    });

    it('should have a description', function () {
        const actual = task.description;
        assert.strictEqual(actual, 'Sword fighting');
    })


});
