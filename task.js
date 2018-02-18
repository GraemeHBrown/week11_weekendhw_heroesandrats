const Task = function (description, difficultyLevel, urgencyLevel, reward) {
    this.description = description;
    this.difficultyLevel = difficultyLevel;
    this.urgencyLevel = urgencyLevel;
    this.reward = reward;
    this.completed = false;
}

Task.prototype.markAsCompleted = function() {
    this.completed = true;
}

module.exports = Task;