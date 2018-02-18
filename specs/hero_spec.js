const assert = require('assert')
const Hero = require('../hero.js')
const Food = require('../food.js')
const Task = require('../task.js')

describe('Hero', function () {
    let hero;
    let food;
    let favouriteFood;
    let taskOne;
    let taskTwo;
    let taskThree;

    beforeEach(function () {
        hero = new Hero('Guybrush Threepwood', 'Carrot cake');
        food = new Food('jawbreakers', 5);
        favouriteFood = new Food('Carrot cake', 10);
        taskOne = new Task('Sword fighting', 5, 15, 25);
        taskTwo = new Task('Thievery', 10, 10, 50);
        taskThree = new Task('Treasure Huntery', 15, 5, 100);

    });

    it('should have a name', function () {
        const actual = hero.name;
        assert.strictEqual(actual, 'Guybrush Threepwood');
    });

    it('should have a favourite food', function () {
        const actual = hero.favouriteFood;
        assert.strictEqual(actual, 'Carrot cake');
    });

    it('should have a health level', function () {
        const actual = hero.health;
        assert.strictEqual(actual, 0);
    });

    it('can talk', function () {
        const actual = hero.talk();
        assert.strictEqual(actual, 'My name is: ' + hero.name);
    });

    it('has a collection of tasks to complete', function () {
        const actual = hero.tasks;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add to tasks', function () {
        const taskCountBefore = hero.tasks.length;
        assert.strictEqual(taskCountBefore, 0);
        hero.addTask(taskOne);
        const taskCountAfter = hero.tasks.length;
        assert.strictEqual(taskCountAfter, taskCountBefore + 1);
    });

    it('should be able to sort tasks by difficulty level desc order', function () {
        hero.addTask(taskOne);
        hero.addTask(taskTwo);
        hero.addTask(taskThree);
        const difficultyLevelOfFirstItemPreSort = hero.tasks[0].difficultyLevel;
        assert.strictEqual(difficultyLevelOfFirstItemPreSort, 5);
        sortedArray = hero.sortTasks('difficultyLevel', 'desc');
        const difficultyLevelOfFirstItemPostSort = hero.tasks[0].difficultyLevel;
        assert.strictEqual(difficultyLevelOfFirstItemPostSort, 15);
    });

    it('should be able to sort tasks by urgency level asc order', function () {
        hero.addTask(taskOne);
        hero.addTask(taskTwo);
        hero.addTask(taskThree);
        const urgencyLevelOfFirstItemPreSort = hero.tasks[0].urgencyLevel;
        assert.strictEqual(urgencyLevelOfFirstItemPreSort, 15);
        sortedArray = hero.sortTasks('urgencyLevel', 'asc');
        const urgencyLevelOfFirstItemPostSort = hero.tasks[0].urgencyLevel;
        assert.strictEqual(urgencyLevelOfFirstItemPostSort, 5);
    });

    it('should be able to sort tasks by reward desc order', function () {
        hero.addTask(taskOne);
        hero.addTask(taskTwo);
        hero.addTask(taskThree);
        const rewardLevelOfFirstItemPreSort = hero.tasks[0].reward;
        assert.strictEqual(rewardLevelOfFirstItemPreSort, 25);
        sortedArray = hero.sortTasks('reward', 'desc');
        const rewardLevelOfFirstItemPostSort = hero.tasks[0].reward;
        assert.strictEqual(rewardLevelOfFirstItemPostSort, 100);
    });

    it('should be able to eat', function () {
        const healthValueBeforeEating = hero.health;
        assert.strictEqual(healthValueBeforeEating, 0);
        hero.eat(food);
        const healthValueAfterEating = hero.health;
        assert.strictEqual(healthValueAfterEating, healthValueBeforeEating + food.replenishmentValue);
    });

    it('eating favourite food gives increased replenishment', function () {
        const healthValueBeforeEating = hero.health;
        assert.strictEqual(healthValueBeforeEating, 0);
        hero.eat(favouriteFood);
        const healthValueAfterEating = hero.health;
        assert.strictEqual(healthValueAfterEating, healthValueBeforeEating + (favouriteFood.replenishmentValue * 1.5));
    });

    it('should be able to view tasks marked as complete', function () {
        taskOne.markAsCompleted();
        hero.addTask(taskOne);
        hero.addTask(taskTwo);
        hero.addTask(taskThree);
        const completeTasks = hero.getTasksWithCompletedStatus(true);
        assert.strictEqual(completeTasks[0].completed, true);
        assert.strictEqual(completeTasks.length, 1);
    });

    it('should be able to view tasks marked as incomplete', function () {
        taskOne.markAsCompleted();
        hero.addTask(taskOne);
        hero.addTask(taskTwo);
        hero.addTask(taskThree);
        const inCompleteTasks = hero.getTasksWithCompletedStatus(false);
        assert.strictEqual(inCompleteTasks[0].completed, false);
        assert.strictEqual(inCompleteTasks.length, 2);
    });
});
