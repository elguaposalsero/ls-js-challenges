class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(potentialAnagrams) { // You can use filter here as well
    return potentialAnagrams.filter(candidate => {
      if (this.compare(candidate)) {
        return true;
      }
    })
  }
  
  compare(candidate) {
    let word = this.word.toLowerCase();
    candidate = candidate.toLowerCase();

    if (this.differentLengths(candidate) || this.sameWord(candidate)) return false;

    for (let idx = 0; idx < word.length; idx ++) { // allergy
      let letter = word[idx];
      if (candidate.includes(letter)) {
        candidate = this.removeLetter(candidate, letter); 
      } else {
        return false;
      }
    }

    return true;
  }

  differentLengths(candidate) {
    if (this.word.length !== candidate.length) return true;
    return false;
  }

  sameWord(candidate) {
    if (this.word === candidate) return true;
    return false;
  }

  removeLetter(word, letter) {
    let wordAsList = word.split('');
    wordAsList.splice(wordAsList.indexOf(letter), 1);
    return wordAsList.join('');
  }
}

// Another way to compare anagrams is to just sort
// And once you sort, just compare the strings to see if they're exactly the same
// This is quicker because you don't have to loop through each element.

let word = new Anagram('allergy');
console.log(word.match(['gallery', 'ballerina', 'regally',
'clergy', 'largely', 'leading']));

module.exports = Anagram;