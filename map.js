
const map = function(array, callback) {

  let results = [];
  for (let arr of array) {
    results.push(callback(arr));
  }
  return results;
};


const word1 = ["ground", "control", "to", "major", "tom"];
const word2 = ["school", "control", "to", "play", "jerry"];

const results1 = map(word1, word => word[0]);
const results2 = map(word2, word => word[0]);
// const result1 = map(word1, word = word => word[0]);

const eqArrays = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(newArr1, newArr2) {
  if (eqArrays(newArr1, newArr2)) {
    console.log(`✅ ${newArr1} === ${newArr2}`);
  } else {
    console.log(`❌ ${newArr1} !== ${newArr2}`);
  }
};

assertArraysEqual(results1, results2);


module.exports = map;