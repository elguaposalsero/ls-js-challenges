// Perfect Number: The sum of its divisors is equal to the number itself
// Deficient Number: The sum of its divisors is less than the number itself
// Abundant: The sum of its divisors is greater than the number itself

// Requirements
// Negative numbers should raise an error
// classify is a static method on the PerfectNumber class

class PerfectNumber{
  static classify(num) {
    if (num < 0) throw new Error('No negative numbers');

    let sum = 0;

    for (let divisor = 0; divisor < num; divisor++) {
      if (num % divisor === 0) {
        sum += divisor;
      }
    }

    if (sum === num) {
      return 'perfect'
    } else if (sum > num) {
      return 'abundant'
    } else {
      return 'deficient'
    }
  }
}

module.exports = PerfectNumber;

