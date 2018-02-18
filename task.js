const Task = function (description, difficultyLevel, urgencyLevel, reward) {
    this.description = description;
    this.difficultyLevel = difficultyLevel;
    this.urgencyLevel = urgencyLevel;
    this.reward = reward;
    this.completed = false;
}

module.exports = Task;