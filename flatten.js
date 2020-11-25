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