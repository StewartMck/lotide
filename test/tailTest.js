const assertDeepEqual = require('chai').assert.deepEqual;
const tail = require('../tail');

describe("#tail", () => {
  it("should return [] when passed []", () => {
    assertDeepEqual(tail([]), []);
  });

  it("should return [] when passed [1]", () => {
    assertDeepEqual(tail([1]), []);
  });

  it("should return ['Lighthouse','labs'] when passed ['Hello','Lighthouse','Labs']", () => {
    assertDeepEqual(tail(["Hello","Lighthouse","Labs"]),["Lighthouse","Labs"]);
  });

});