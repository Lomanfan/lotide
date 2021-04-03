
//Method 1:
const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== [" "]) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];     //[]
      }
    }
  }
  return results;
};


//Method 2:
// const letterPositions = function(sentence) {
//   const results = {};

//   sentence.split('').forEach((ltr, index) => {
//     if (results[ltr]) {
//       results[ltr].push(index);
//     } else {
//       results[ltr] = [index];    //[]
//     }
//   });
//   return results;
// };


//TEST CODE:
console.log(letterPositions("hello"));


const assertArraysEqual = function (newArr1, newArr2) {
  if (eqArrays(newArr1, newArr2)) {
    console.log(`✅ ${newArr1} === ${newArr2}`);
  } else {
    console.log(`❌ ${newArr1} !== ${newArr2}`);
  }
};

const eqArrays = function (arr1, arr2) {
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


module.exports = letterPositions;


