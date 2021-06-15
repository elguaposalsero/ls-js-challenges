class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let hammingDistance = 0;
    let [shortest, longest] = this.shortAndLongStrand(otherStrand);

    for (let index in shortest) {
      if (shortest[index] !== longest[index]) {
        hammingDistance += 1;
      }
    }

    return hammingDistance;
  }

  shortAndLongStrand(otherStrand) {
    if (this.strand.length < otherStrand.length) {
      return [this.strand, otherStrand];
    } else {
      return [otherStrand, this.strand];
    }
  }
}

module.exports = DNA;
