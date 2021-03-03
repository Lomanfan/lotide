//Implement assertArraysEqual which will take in two arrays and
//console.log an appropriate message to the console.


//this assertion function will make use of your eqArrays function for array comparison.
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

assertArraysEqual([1,2,3],[1,2,3]);

