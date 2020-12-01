const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    const object1Keys = Object.keys(object1);
    for (let key in object1Keys) {
      if (!eqArrays(object1[key], object2[key]) && object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

module.exports = eqObjects;