const assertEqual = function(actual, expected) {
  if (typeof actual === 'object') actual = actual.toString();
  if (actual === expected) {
    return `${String.fromCodePoint(0x1F642).repeat(3)} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${String.fromCodePoint(0x1F641).repeat(3)} Assertion Failed: ${actual} !== ${expected}`;
  }
};

// An array with only one element should yield an empty array for its tail
// An empty array should yield an empty array for its tail
const tail = function(inputArray) {
  if (inputArray.length > 1) {
    return inputArray.slice(1);
  } else {
    return [];
  }
};


//TEST CODE
console.log(assertEqual(tail([5, 6, 7]), '6,7'));
console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse,Labs"));
console.log(assertEqual(tail([]), 5));
console.log(assertEqual(tail([6]), 8));