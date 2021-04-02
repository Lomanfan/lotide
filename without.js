//Without function removes unwanted items from an array: 

const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

const without = function (sourceArray, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!itemsToRemove.includes(sourceArray[i])) {
      newArray.push(sourceArray[i]);
    }
  }
  return newArray;
};

// TEST CODE:
// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // ==> [ 'hello', 'world' ]
// assertArraysEqual(words, ["hello", "world", "lighthouse"]); //To check & make sure original array was not altered. 


module.exports = without;
