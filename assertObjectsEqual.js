
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//TEST CODE:
ab = { a: "1", b: "2" };
ba = { b: "2", a: "1" };
console.log(assertObjectsEqual(ab, ba));


module.exports = assertObjectsEqual;