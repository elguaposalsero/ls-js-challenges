// Program that manages robot factory settings
// When robots come off the factory floor they have no name
// A ranodom name is generated like the following: RX837 or BC811.
// Sometimes you need to reset the settings
// When you do this, the name gets wiped
// Next time you ask, it will respond with a new, random name
// Don't allow the use of a name twice if possible


// Requirements
// We need seedrandom library
// Because of the  way it's called, we know its global: require('seedrandom');
// Class called Robot
// Method called name
// Name must match the following regex: /^[A-Z]{2}\d{3}$/;
// Need to store the name that gets generated when you call "robot.name() into a property"
// Different robots must always have diff names
// Looks like seedRandom will override. This means you can use normal math.random and will be overriden

class Robot {
  static alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static takenNames = [];
  static deleteName(currName) {
    this.takenNames = this.takenNames.filter(name => name !== currName);
  }

  currName = null;
  
  name() {
    if (this.currName) return this.currName
    this.reset();
    return this.currName;
  };

  reset() {
    this.currName = this.generateName();
    Robot.takenNames.push(this.currName);
  }

  generateName() {
    let name = '';

    do {
      name += (this.randLetter() + this.randLetter()
            + this.randNumber() + this.randNumber() + this.randNumber());
    } while (Robot.takenNames.includes(name));

    Robot.deleteName(name);

    return name;
  }

  randNumber() {
    return Math.floor(Math.random() * 10);
  };

  randLetter() {
    return String(Robot.alphabet[(Math.floor(Math.random() * 26))])
  };
}

module.exports = Robot;

// let robot = new Robot();
// robot.name();
// robot.reset();
// robot.name();
// console.log(Robot.takenNames);
