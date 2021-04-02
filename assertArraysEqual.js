//assertArraysEqual function compares two arrays and
//console.log an appropriate message to the console.


const eqArrays = require('./eqArrays');

const assertArraysEqual = function (newArr1, newArr2) {
  if (eqArrays(newArr1, newArr2)) {
    console.log(`✅ ${newArr1} === ${newArr2}`);
  } else {
    console.log(`❌ ${newArr1} !== ${newArr2}`);
  }
};

module.exports = assertArraysEqual;

// TEST CODE:
// assertArraysEqual([1,2,3],[1,2,3]);
// assertArraysEqual([1,2,3],[1,2,4]);