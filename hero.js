// hero

const Hero = function (name, favouriteFood) {
    this.name = name;
    this.health = 0;
    this.favouriteFood = favouriteFood;
    this.tasks = [];
}

Hero.prototype.talk = function () {
    return 'My name is: ' + this.name;
}

Hero.prototype.addTask = function (task) {
    this.tasks.push(task);
}

Hero.prototype.sortTasks = function (fieldToSortBy, order) {
    // let sortedArray;

    const sortedArray = this.tasks.sort(function (a, b) {
        if (order === 'asc') {
            return a[fieldToSortBy] - b[fieldToSortBy]
        } else if (order==='desc') {
            return b[fieldToSortBy] - a[fieldToSortBy]
        }

    });

    return sortedArray;
}

Hero.prototype.eat = function (food) {
    if (food.name === this.favouriteFood) {
        const favouriteFoodValue = (food.replenishmentValue * 1.5);
        this.health += favouriteFoodValue;
    } else {
        this.health += food.replenishmentValue;
    }

}

module.exports = Hero
