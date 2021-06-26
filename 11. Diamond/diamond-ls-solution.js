class Diamond {
  static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  static makeDiamond(letter) {
    let range = this.letterRange(letter);
    let widthOfDiamond = this.maxWidth(letter);

    let diamond = [];
    range.forEach(letter => {
      diamond.push(this.center(this.makeRow(letter), widthOfDiamond));
    });

    return `${diamond.join("\n")}\n`;
  }

  static makeRow(letter) {
    if (letter === 'A') return 'A';
    if (letter === 'B') return 'B B';

    return letter + this.determineSpaces(letter) + letter;
  }

  static maxWidth(letter) {
    if (letter === 'A') return 1;

    return this.determineSpaces(letter).length + 2;
  }

  static center(content, width) {
    let outerPad = (width - content.length) / 2;
    let padStr = (' ').repeat(outerPad);
    return `${padStr}${content}${padStr}`;
  }

  // Create an array with all the letters you need )forward and backwards
  // Loop and push until currentChar is equal to your letter
  // Once done, combine the array, and then the inverse of the array (cutoff the first letter)
  static letterRange(letter) {
    let range = [];

    for (let i = 0; i < this.alphabet.length; i++) {
      let currentChar = this.alphabet[i];

      range.push(currentChar);
      if (currentChar === letter) break;
    }

    return [...range, ...range.reverse().slice(1)];
  }

  static determineSpaces(letter) {
    let currLetterIdx = 1;
    let spaces = 1;
    let currentLetter = this.alphabet[currLetterIdx];

    while (currentLetter !== letter) {
      spaces += 2;
      currLetterIdx++;
      currentLetter = this.alphabet[currLetterIdx];
    }

    return (' ').repeat(spaces);
  }
}

console.log(Diamond.letterRange('E'));

module.exports = Diamond;