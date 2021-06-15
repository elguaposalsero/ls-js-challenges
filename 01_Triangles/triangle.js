// See if you can use closure to make the private methods actually private and inaccessible 
class Triangle { 
  constructor(side1, side2, side3){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    if (!this.validTriangle()) throw new Error(); 
  }

  kind() {
    if (this.side1 === this.side2 && this.side2 === this.side3) {
      return "equilateral";
    } else if(this.side1 !== this.side2 && this.side2 !== this.side3 && this.side1 !== this.side3) {
      return "scalene";
    } else {
      return "isosceles"
    }
  }

  validTriangle() {
    if (this.positiveIntegerSides() && this.followsTriangleRules()) return true;
    return false;
  }

  positiveIntegerSides() {
    if (this.side1 > 0 && this.side2 > 0 && this.side3 > 0) return true
    return false;
  }

  followsTriangleRules() {
    if (
      this.side1 < this.side2 + this.side3 &&
      this.side2 < this.side1 + this.side3 &&
      this.side3 < this.side1 + this.side2
    ) return true
      return false;
  }
}

module.exports = Triangle;

