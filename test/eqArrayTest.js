// test/head.js & assertEqualTest.js

const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// TEST CODE
// ...

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2","3"]), false); // => NOT PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);// => should Pass