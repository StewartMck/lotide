// DATA
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [43, 22, 66, 98, 1, 4, 10];
const names = ["Tan", "Harry", "Sam", "Evan"];

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

assertArraysEqual(map(words, word=>word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(numbers, number=>number * 2), [86, 44, 132, 196, 2, 8, 20]);
assertArraysEqual(map(names, name=>name.replace('a', 'e')), ["Ten", "Herry", "Sem", "Even"]);
