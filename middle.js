const middle = function(inputArray) {
 
  if (inputArray.length <= 2) {
    return [];
  } else {
    let middle = Math.ceil(inputArray.length / 2);
    return inputArray.length % 2 === 0 ? inputArray.slice(middle - 1, middle + 1) : inputArray.slice(middle - 1, middle);
  }

};

module.exports = middle;