
// test/head.js & assertEqualTest.js
const assert = require('chai').assert;
const head = require('../head');


describe("test for head function", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns 'undefine' for empty array", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns 'undefine' for empty array", () => {
    assert.strictEqual(head([]), undefined);
  });

});


// TEST CODE
// const assertEqual = require('../assertEqual');
// ...
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 5);
// assertEqual(head([6]), 5);