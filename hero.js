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

Hero.prototype.eat = function (food) {
    if (food.name === this.favouriteFood) {
        const favouriteFoodValue = (food.replenishmentValue * 1.5);
        this.health += favouriteFoodValue;
    } else {
        this.health += food.replenishmentValue;
    }

}

module.exports = Hero
