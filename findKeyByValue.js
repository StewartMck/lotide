const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x1F642).repeat(3)} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${String.fromCodePoint(0x1F641).repeat(3)} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (let key of keys) {
    if (object[key] === value) return key;
  }
  return undefined;
};


// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const carsByType = {
  sports: "Ferrari",
  suv: "Jeep",
  van: "Mercedes Benz",
  pickup: "Ford"
};

assertEqual(findKeyByValue(carsByType, "Ferrari"), "sports");
assertEqual(findKeyByValue(carsByType, "BMW"), undefined);