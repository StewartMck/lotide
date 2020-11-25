const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F642).repeat(3)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F641).repeat(3)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || arrayA.length !== arrayB.length) return false;
  for (let [i, value] of arrayA.entries()) {
    if (value !== arrayB[i]) return false;
  }
  return true;
};


/* Objects Equal:
    > Same number of keys
    > Value for each key in one Object is same as value for same key in other object
*/
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    const object1Keys = Object.keys(object1);
    for (let key of object1Keys) {
      if (!eqArrays(object1[key], object2[key]) && object1[key] !== object2[key]) return false;
    }
  }
  return true;
};


// TEST CODE

// check length
const lengthA = { a: "1", b: "2" };
const lengthB = { b: "2", a: "1", c: "2" };
assertEqual(eqObjects(lengthA, lengthB), false); // => false lengthB > lengthA

// check primitive keys
const primA = { a: "1", b: "2" };
const primB = { b: "2", a: "1" };
assertEqual(eqObjects(primA, primB), true); // => true a=1 & b=2 in both Objects

// check different key:value pairs
const diffA = { a: "1", b: "2", c: "3" };
const diffB = { b: 'b', a: "a", c: "c" };
assertEqual(eqObjects(diffA, diffB), false); // => false because both objects have different key:value pairs

// check equal arrays
const eqArrayA = { c: "1", d: ["2", 3] };
const eqArrayB = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(eqArrayA, eqArrayB), true); // => true because both objects contain array ["2", 3]

// check different arrays
const diffArrayA = { c: "1", d: ["1", 3] };
const diffArrayB = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(diffArrayA, diffArrayB), false); // => false because both objects have arrays with different elements