//For Objects Comparison
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


//pseudo codes: 
// if each objt1 key !== objt2 key stop, output false;
// if objt1[key] (value)=== objt2[key] (value), out out true.
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

const eqObjects = function (object1, object2) {
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

eqObjects(ab, abc); 
// => false


module.exports = eqObjects;