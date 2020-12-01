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

module.exports = letterPositions;