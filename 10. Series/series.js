class Series {
  constructor(series) {
    this.series = series; // [12345]
  }

  slices(num) { //2
    let idx = 0;
    let slices = [];
    if (num > this.series.length) throw new Error ("Slice can't be larger than series");

    while (idx + num <= this.series.length) {
      slices.push(this.series.split('').slice(idx, idx + num).map(string => {
        return Number(string);
      }));
    
      idx += 1;
    }

    return slices;
  }
}

module.exports = Series;