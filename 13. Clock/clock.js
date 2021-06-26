class Clock {
  constructor(hours = 0, minutes = 0) { // 23: 22 
    this.hours = hours;
    this.minutes = minutes;
  }

  static at(hours, minutes) {
    return new Clock(hours, minutes);
  }

  toString() {
    let minutes = String(this.minutes)
    let hours = String(this.hours)

    if (minutes.length === 1) minutes = '0' + minutes;
    if (hours.length === 1) hours = '0' + hours;
    
    return (`${hours}:${minutes}`)
  }

  add(num) {
    while (num) {
      this.incrementMinutes();
      this.hourWrap();
      this.dailyWrap();
      num -= 1;
    }
    return this;
  }

  subtract(num) {
    while (num) {
      this.decrementMinutes();
      this.hourWrap();
      this.dailyWrap();
      num -= 1;
    }
    return this;
  }

  hourWrap() {
    if (this.minutes === 60) {
      this.hours += 1;
      this.minutes = 0;
    } else if (this.minutes === -1) {
      this.hours -= 1;
      this.minutes = 59;
    }
  }

  dailyWrap() {
    if (this.hours === 24) {
      this.hours = 0;
      this.minutes = 0;
    } else if (this.hours === -1) {
      this.hours = 23;
      this.minutes = 59;
    }
  }

  incrementMinutes() {
    this.minutes += 1;
  }

  decrementMinutes() {
    this.minutes -= 1;
  }

  isEqual(compareClock) {
    if (compareClock.toString() === this.toString()) {
      return true;
    }
    return false;
  }
}

module.exports = Clock;

