
function Scrabble(word) {
  if (!this instanceof Scrabble) {
    return new Scrabble(word);
  }

  this.word = word ? word.toLowerCase() : ''
}

Scrabble.prototype.score = function() {
  if (!this.word) return 0;

  let score = 0;
  for (let letter of this.word) {
    score += this.computeScore(letter);
  }
  return score;
}

Scrabble.score = function(word) {
  let score = 0;
  for (let letter of word) {
    score += Scrabble.computeScore(letter);
  }
  return score;
}

Scrabble.computeScore = function(letter) {
  for (let value in Scrabble.letterValues) {
    if (Scrabble.letterValues[value].includes(letter)) {
      return Number(value);
    }
  }
  return 0;
}

Scrabble.prototype.computeScore = function(letter) {
  for (let value in Scrabble.letterValues) {
    if (Scrabble.letterValues[value].includes(letter)) {
      return Number(value);
    }
  }
  return 0;
}

Scrabble.letterValues = {
  // Didn't have to be strings
  // Could have been groups of letters (since they're iterable) "aeioulnrst": 1
  1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'], 
  2: ['d', 'g'],
  3: ['b', 'c', 'm', 'p'],
  4: ['f', 'h', 'v', 'w', 'y'],
  5: ['k'],
  8: ['j', 'x'],
  10: ['q', 'z']
}



// let word = new Scrabble(null);
// console.log(word.score(null));

module.exports = Scrabble;