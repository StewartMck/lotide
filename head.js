const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `${String.fromCodePoint(0x1F642).repeat(3)} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${String.fromCodePoint(0x1F641).repeat(3)} Assertion Failed: ${actual} !== ${expected}`;
  }
};

const head = function(inputArray) {
  if (inputArray.length > 0) {
    return inputArray[0];
  } else {
    return undefined;
  }
};

// //TEST CODE
// console.log(assertEqual(head([5,6,7]), 5));
// console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
// console.log(assertEqual(head([]), 5));
// console.log(assertEqual(head(6,7,8), 8));