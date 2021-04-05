//Find middle function:
// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned

const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const middle = function (array) {
  let midArr = [];
  let middleIndx = Math.floor(array.length / 2);

  if (array.length < 3) {
    midArr = [];
  } else if (array.length % 2 !== 0) {
    midArr = [array[middleIndx]];
  } else {
    midArr = [array[middleIndx - 1], array[middleIndx]];
  }
  return midArr;
};


//TEST CODE:
// arrayX= [5, 2, 6, 4, 9, 12, 18, 13, 1, 17, 25, 33, 55, 62,66];
// console.log(middle(arrayX));

// console.log(middle([1]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

// console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
// console.log(assertArraysEqual(middle([1, 2, 3]), [1, 2]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]));
// console.log(eqArrays([1,2],[1,2]));


module.exports = middle;