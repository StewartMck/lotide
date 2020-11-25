const assertArraysEqual = function (arrayA, arrayB) {
  let failed = String.fromCodePoint(0x1F641).repeat(3);
  let passed = String.fromCodePoint(0x1F642).repeat(3);

  for (let [i, value] of arrayA.entries()) {
    if (value !== arrayB[i] || (!Array.isArray(arrayA) || arrayA.length !== arrayB.length)) {
      console.log(`${failed} Assertion Failed: ${arrayA} !== ${arrayB}`);
      return null;
    }
  }
  console.log(`${passed} Assertion Passed: ${arrayA} === ${arrayB}`);
};