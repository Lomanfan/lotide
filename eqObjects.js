//For Objects Comparison
// Returns true if both objects have identical keys with identical values.

const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {

  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {
    if (Array.isArray(object1[key] && Array.isArray(object2[key]))) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
    } else {
      if (object1[key] !== object2[key]) {
        return false;
        }
      }
    }
  }
  return true;
};


const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

console.log(eqObjects(ab, ba));
console.log(eqObjects(ab, abc));
assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


module.exports = eqObjects;