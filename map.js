
const map = function(array,callback) {
    // temporary code:
    //console.log('array: ', array);
    //console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');                  //remove debug friendly console.log
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const word2 = ["school", "control", "to", "play", "jerry"];

const results1 = map(words, word => word[0]);
const results2 = map(word2, word => word[0]);
// console.log(results1);
// console.log(results2);


const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(newArr1, newArr2) {
  if (eqArrays(newArr1,newArr2)) {
    console.log(`✅ ${newArr1} === ${newArr2}`);
  } else {
    console.log(`❌ ${newArr1} !== ${newArr2}`);
  }
};

assertArraysEqual(results1,results2);
