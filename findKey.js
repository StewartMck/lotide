const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F642).repeat(3)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F641).repeat(3)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  const objKeys = Object.keys(object);
  for (let key of objKeys) {
    if (callback(object[key])) return key;
  }
};

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), 'noma');