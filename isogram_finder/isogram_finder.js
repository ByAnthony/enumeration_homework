const IsogramFinder = function (word) {
    this.word = word.toLowerCase()
};

IsogramFinder.prototype.isIsogram = function() {
    letters = this.word.split('');
    return letters.every((this.onlyUnique));
};

IsogramFinder.prototype.onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
}

module.exports = IsogramFinder;