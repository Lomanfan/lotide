
const findKeyByValue = function(bestTVShowsByGenre, showName) { 
  let tvKey = Object.keys(bestTVShowsByGenre);  
  for (const key of tvKey) {
    if (bestTVShowsByGenre[key] === showName) {
      return key;
    }
  }
};

//Test Assertions:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
