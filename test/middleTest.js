const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it("should return [], when passed [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });

  it("should return [] when passed [1,2]", () => {
    assert.deepEqual(middle([1,2]), []);
  });

  it("should return [4] when passed [1,2,3,4,5,6,7]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7]), [4]);
  });

  it("should return [3,4] when passed [1,2,3,4,5,6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]),[3,4]);
  });

});