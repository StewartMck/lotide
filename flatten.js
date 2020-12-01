const flatten = function(inputArray) {
  const flatArray = [];
  for (let element of inputArray) {
    if (Array.isArray(element)) {
      for (let innerElement of element) {
        flatArray.push(innerElement);
      }
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};

module.exports = flatten;