//Challenge//Implement middle which will take in an array and
//return the middle-most element(s) of the given array.
//The middle function should return an array with only the middle element(s) of
//the provided array.
//This means that the length of the returned elements could vary.

// For arrays with one or two elements, there is no middle. Return an empty array.
// middle([1]) // => []
// middle([1, 2]) // => []
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// middle([1, 2, 3]) // => [2]
// middle([1, 2, 3, 4, 5]) // => [3]
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
// middle([1, 2, 3, 4]) // => [2, 3]
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]



//find Middle
const middle = function(array) {
  let midArr = [];
  let middleIndx = Math.floor(array.length / 2);
  if (array.length === 1 || array.length === 2) {
    midArr = [];
  } else if (array.length % 2 !== 0) {
    midArr = [array[middleIndx]];
  } else {
    midArr = [array[middleIndx - 1], array[middleIndx]];
  }
  return midArr;
};

module.exports = middle;

//arrayY= [5, 2, 6, 4, 9, 12, 18, 13, 1, 17, 25, 33, 55, 62,66];
//console.log(arrayY.length);
//console.log(middle(arrayY));

// console.log(middle([1]));
// console.log(middle([1, 2, 3]));
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));

// console.log(assertArraysEqual(middle([1, 2, 3]), [2]));

// console.log(assertArraysEqual(middle([1, 2, 3]), [1, 2]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [2, 3]));

// console.log(eqArrays([1,2],[1,2]));