//Function scans the object and return the FIRST key for which
//the callback returns a truthy value. NO key is found => undefined.

//Question: set undefined!!! Ask mentor

const findKey = function(object, callback) {
  for (const key in object) {
    // console.log("key", key);
    // console.log("object[key]", object[key]);
    if (callback(object[key])) {                //passing in object with value of stars: 1
      return key;                                               
    } 
  }
  // console.log("result",result);
  return undefined;
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)); // => "noma"       // parm x is star2, star2.stars =2, does it ===2? 


const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)), 'noma');


module.exports = findKey;