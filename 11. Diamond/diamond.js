"use strict"

  class Diamond {
    constructor(maxLetter) {
      this.maxLetter = maxLetter.toUpperCase();
    }

    static alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    static makeDiamond(maxLetter) {
      let diamond = new Diamond(maxLetter).makeDiamond()
      return diamond;
    }

    diamondDepth() {
      return Diamond.alphabet.indexOf(this.maxLetter);
    }

    makeDiamond() {
      if (this.maxLetter === 'A') return "A\n";
      return this.diamondTip() + this.topHalf() + this.bottomHalf() + this.diamondTip();
    };

    diamondTip() {
      let sideSpaces = this.diamondDepth();
      return (`${' '.repeat(sideSpaces)}A${' '.repeat(sideSpaces)}\n`)
    };

    padding(spaces) {
      return ' '.repeat(spaces)
    };

    middleContent(letterIndex, separatorSpace) {
      return `${Diamond.alphabet[letterIndex]}${' '.repeat(separatorSpace)}${Diamond.alphabet[letterIndex]}`
    }

    topHalf() {
      let side = this.diamondDepth() - 1
      let middle = 1;
      let index = 1;
      let topHalf = '';

      while (side > 0) {
        topHalf += (this.padding(side) + this.middleContent(index, middle) + this.padding(side) + '\n')
        side --
        middle += 2;
        index += 1;
      };

      return topHalf;
    };

    bottomHalf() {
      let bottomHalf = '';
      let side = 0
      let middle = (this.diamondDepth() * 2) - 1
      let index = this.diamondDepth();
      
      while (middle > 0) {
        bottomHalf += (this.padding(side) + this.middleContent(index, middle) + this.padding(side) + '\n')
        side ++;
        middle -= 2;
        index -= 1;
      };

      return bottomHalf
    };
  }

// let answer = Diamond.makeDiamond('A');
// console.log(answer);


module.exports = Diamond;

