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

const takeUntil = function(array, callback) {
  return array.slice(0, array.findIndex(callback));
};


assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0),[1, 2, 5, 7, 2]);

assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','),["I've", "been", "to", "Hollywood"]);

assertArraysEqual(takeUntil(['cappuccino', 'prosciutto', 'allegretto', 'rundown', 'pastry', 'cake'], x => x.endsWith('n')),['cappuccino', 'prosciutto', 'allegretto']);