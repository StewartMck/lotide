// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `${String.fromCodePoint(0x1F642).repeat(3)} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${String.fromCodePoint(0x1F641).repeat(3)} Assertion Failed: ${actual} !== ${expected}`;
  }
};

// // TEST CODE
// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));
// console.log(assertEqual("Bootcamp", "Bootcamp"));
// console.log(assertEqual(1, 10));