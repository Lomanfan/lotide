
// test/tail.js & assertEqualTest.js
const assert = require('chai').assert;

const tail = require('../tail');
// const assertEqual = require('../assertEqual');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Lab'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo','Lighthouse', 'Labs']),['Lighthouse', 'Labs']);
  });
});

// TEST CODE
// ...
// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const tailArray = tail(words);

// assertEqual(words.length, 3); 
// assertEqual(tailArray[0], "Lighthouse"); 
// assertEqual(tailArray[1], "Labs"); 