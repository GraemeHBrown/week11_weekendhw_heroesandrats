const assert = require('assert')
const Task = require('../task.js')

describe('Task', function() {
    let task;
    beforeEach(function () {
        task = new Task('Sword fighting',5, 10, 25);
    });

    it('should have a description', function () {
        const actual = task.description;
        assert.strictEqual(actual, 'Sword fighting');
    });

    it('should have a difficulty level', function () {
        const actual = task.difficultyLevel;
        assert.strictEqual(actual, 5);
    });

    it('should have an urgency level', function () {
        const actual = task.urgencyLevel;
        assert.strictEqual(actual, 10);
    });

    it('should have a reward', function () {
        const actual = task.reward;
        assert.strictEqual(actual, 25);
    });

    it('task should be able to be marked as completed', function () {
        const before = task.completed;
        assert.strictEqual(before, false);
        task.markAsCompleted();
        const after = task.completed;
        assert.strictEqual(after, true);
    });

});
