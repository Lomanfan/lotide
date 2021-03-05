
const letterPositions = function(sentence) {
  let results = {};   // object {}
  let sentenceLtrsArray = sentence.split("");
  for (i = 0; i < sentenceLtrsArray.length; i++) {
    if (sentenceLtrsArray[i] !== [" "]) {
      if (results[sentenceLtrsArray[i]]) {
        //console.log("there are results",results);
        results[sentenceLtrsArray[i]].push(i);
      } else {
        results[sentenceLtrsArray[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("hello"));


const assertArraysEqual = function(newArr1, newArr2) {
  if (eqArrays(newArr1, newArr2)) {
    console.log(`✅ ${newArr1} === ${newArr2}`);
  } else {
    console.log(`❌ ${newArr1} !== ${newArr2}`);
  }
};

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

assertArraysEqual(letterPositions("hello").e, [1]);