
// test/head.js & assertEqualTest.js

const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CODE
// ...

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([6]), 5);