class BeerSong {
  static lyrics() {
    return this.verses(99, 0);
  }
  // There are two methods. One for one verse, and the other for all of them. 

  static verse(num) {
    if (num === 2) return this.thirdLastVerse(num);
    if (num === 1) return this.secondLastVerse(num);
    if (num === 0) return this.lastVerse();
    return this.normalVerse(num);
  }


  static verses(firstVerse, lastVerse) { // (99, 97)
    let verses = this.verse(firstVerse);
    let currVerse = firstVerse - 1; 

    while (currVerse < firstVerse && currVerse >= lastVerse) {
      verses += '\n' + this.verse(currVerse);
      currVerse -= 1
    }

    return verses;
  }

  static normalVerse(num){
    return `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.
`     
  }

  static thirdLastVerse(num) {
    return `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottle of beer on the wall.
`  
  }

  static secondLastVerse(num) {
    return `${num} bottle of beer on the wall, ${num} bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`
  }

  static lastVerse() {
    return `No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`
  }
}

console.log(BeerSong.verses(98, 97));

module.exports = BeerSong;
