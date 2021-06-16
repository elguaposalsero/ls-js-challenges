class RomanNumeral {
  constructor(number) {
    this.number = number;
  }

  static numbersToRoman = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]

  toRoman() { 
    let romanNumeral = "";
    let number = this.number;

    while (number > 0) {
      let oneSigNum = (this.oneSigDigit(number));
      for (let combo of RomanNumeral.numbersToRoman) { // 400
        if ((oneSigNum /  combo[0]) >= 1) {
          romanNumeral += combo[1];
          number -= combo[0];
          break;
        }
      }
    }
    return romanNumeral;
  }

  oneSigDigit(num) {
    let numAsString = num.toString()
    return(Number(numAsString[0]+ '0'.repeat(numAsString.length - 1)));
  }

}

module.exports = RomanNumeral;