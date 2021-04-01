

//Task: Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    // console.log(object1[key]);
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ ${inspect(actual)} !== ${inspect(expected)}`);
  }
};                         

ab = { a: "1", b: "2" };
ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab,ba));




module.exports = assertObjectsEqual;

//Expected Output in console:
//✅✅✅ Assertion Passed: { a: '1', b: 2 } === { b: 2, a: '1' }
