const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F642).repeat(3)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F641).repeat(3)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(inputString) {
  const charCount = {};
  for (let character of inputString) {
    if (character !== ' ') {
      if (charCount[character]) {
        charCount[character] += 1;
      } else {
        charCount[character] = 1;
      }
    }
  }
  return charCount;
};