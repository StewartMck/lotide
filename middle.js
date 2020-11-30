const middle = function(inputArray) {
  let middle = Math.ceil(inputArray.length / 2);
  if (inputArray.length % 2 === 0 && inputArray.length !== 2) {
    return inputArray.slice(middle - 1, middle + 1);
  } else {
    if (inputArray.length <= 2) {
      return [];
    } else {
      return inputArray.slice(middle - 1, middle);
    }
  }
};

module.exports = middle;