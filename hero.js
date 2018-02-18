// hero

const Hero = function (name, favouriteFood) {
    this.name = name;
    this.health = 0;
    this.favouriteFood= favouriteFood; 
    this.tasks = [];   
}

Hero.prototype.talk = function() {
    return 'My name is: '+this.name;    
}

module.exports = Hero
