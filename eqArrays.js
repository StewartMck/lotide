const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `${String.fromCodePoint(0x1F642).repeat(3)} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${String.fromCodePoint(0x1F641).repeat(3)} Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || arrayA.length !== arrayB.length) return false;
  for (let [i, value] of arrayA.entries()) {
    if (value !== arrayB[i]) return false;
  }
  return true;
};


// TEST CODE
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true));
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false));
console.log(assertEqual(eqArrays([], [1, 2, 3]), true));
console.log(assertEqual(eqArrays("not an array", [1, 2, 3]), true));