const eqArrays = function(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || arrayA.length !== arrayB.length) return false;
  for (let [i, value] of arrayA.entries()) {
    if (value !== arrayB[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`${String.fromCodePoint(0x1F642).repeat(3)} Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F641).repeat(3)} Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let char = 0; char < sentence.length; char++) {
    if (sentence[char] !== ' ') {
      if (results[sentence[char]]) {
        results[sentence[char]].push(char);
      } else {
        results[sentence[char]] = [char];
      }
    }
  }
  return results;
};