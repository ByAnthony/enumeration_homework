const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
};

PangramFinder.prototype.isPangram = function () {
  phrase = this.phrase.toLowerCase();
  return this.alphabet.every((letter) => phrase.includes(letter));
};

module.exports = PangramFinder;
