const AnagramFinder = function (word) {
    this.word = word;
}

AnagramFinder.prototype.findAnagrams = function(otherWords) {
    return otherWords.filter((otherWord) => {
        if (this.word.toLowerCase().split('').sort().join('') === otherWord.toLowerCase().split('').sort().join('') 
        && this.word.toLowerCase() !== otherWord.toLowerCase()){
            return this.word.toLowerCase().split('').sort().join('') === otherWord.toLowerCase().split('').sort().join('');
        }
    });
  }

module.exports = AnagramFinder;