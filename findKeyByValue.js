
//Method 1:
const findKeyByValue = function (bestTVShowsByGenre, showName) {
  let keys = Object.keys(bestTVShowsByGenre);
  for (const key of keys) {
    if (bestTVShowsByGenre[key] === showName) {
      return key;
    }
  }
};

//Method 2:
// const findKeyByValue = function(bestTVShowsByGenre, showName) {
//   for (const [key, value] of Object.entries(bestTVShowsByGenre)) {
//     if (value === showName) {
//       return key;
//     }
//   }
// };

//TEST CODE:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;


