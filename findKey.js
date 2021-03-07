//Function scans the object and return the FIRST key for which
//the callback returns a truthy value. NO key is found => undefined.

//Question: set undefined!!! Ask mentor

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {                ///findKey.object[key] is true
      return key;                                                 stars: 2
    }
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },                                 
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)); // => "noma"


// const assertEqual = function(actual,expected) {
//   if (actual === expected) {
//     console.log(`✅ ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ ${actual} !== ${expected}`);
//   }
// };