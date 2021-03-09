const assert = require('chai').assert;
const middle = require('../middle');
// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
// ...
describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
});
