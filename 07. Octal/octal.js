class Octal {
  constructor(octal) {
    this.octal = octal;
  }
  
  static base = 8;
  
  toDecimal() { //5674
    let decimal = 0;
    let numAsString = this.octal.split('');
    let numlength = numAsString.length;
    
    for (let idx = numlength - 1; idx >= 0; idx -= 1) {
      if (!(Number(this.octal[idx]) < 8)) return 0;
      decimal += Number(numAsString[idx]) * Octal.base ** (numlength - idx - 1)
    }
  
    return decimal;
  }
}
  
// let octal = new Octal('130')
// console.log(octal.toDecimal());

module.exports = Octal;