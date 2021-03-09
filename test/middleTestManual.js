// test/assertArraysEqual.js

const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
// ...

assertArraysEqual(middle([1, 2, 3]), [2]);

assertArraysEqual(middle([1, 2, 3]), [1, 2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]);

eqArrays([1,2],[1,2]);