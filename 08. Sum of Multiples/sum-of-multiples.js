// Questions and Notes
  // Is there a way to set defaults in the spread operator?
  // Is there a way to do code reuse from static method?
  // Write out the "this" behaviour for classes somewhere.

class SumOfMultiples {
  constructor(...args) { // Is there a way to set defaults here?
    this.multiples = (args.length > 0 ? args : [3, 5]);
  }
  static defaultMultipliers = [3, 5];

  static to(num) {
    let obj = new SumOfMultiples(); 
    return obj.to(num);
  }

  to(num) { // Is there a way to copy the code here from the static method?
    let sumOfMultiples = 0;
    for (let idx = 1; idx < num; idx += 1) {
      if (this.multiples.some(multiplier => idx % multiplier === 0)) {
        sumOfMultiples += idx;
      }
    }
    return sumOfMultiples;
  }
}

module.exports = SumOfMultiples;

