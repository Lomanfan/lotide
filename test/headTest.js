
const assert = require('chai').assert;
const head = require('../head');


describe("#head function test", () => {
  
  it("returns 5 for [5, 6, 7]", () => {
    assert.deepEqual(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns 'undefine' for empty array", () => {
    assert.deepEqual(head([]), undefined);
  });

  it("returns 'undefine' for empty array", () => {
    assert.deepEqual(head([]), undefined);
  });

});
