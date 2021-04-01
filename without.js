//Implement without which will return a subset of a given array,
//removing unwanted elements.


//without
let arr1 = [];
let arr2 = [];

const without = function(array1, array2) {
  let itemToRemove = [];
  for (i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      //console.log('yes');
      itemToRemove.push(array1[i]);
    }
  }
  console.log(itemToRemove);
  return itemToRemove;
};
//console.log(without(arr2, arr1));

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

//eqArrays
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//assertArraysEqual
const assertArraysEqual = function(newArr1, newArr2) {
  if (eqArrays(newArr1,newArr2)) {
    console.log(`✅ ${newArr1} === ${newArr2}`);
  } else {
    console.log(`❌ ${newArr1} !== ${newArr2}`);
  }
};

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);



module.exports = without;