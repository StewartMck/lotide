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

module.exports = countLetters;