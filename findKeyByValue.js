
//Task:
//It should scan the object and return the first key which contains the given value.
//If no key with that given value is found, then it should return undefined.



const findKeyByValue = function(bestTVShowsByGenre, showName) { //bestTVShowByGenre {}, showName ""
  let byGenre = {};                                 //Object {}
  let tvKey = Object.keys(bestTVShowsByGenre);  //Object.keys() returns an array of KEYS
  for (let i = 0; i < tvKey.length; i++) {
    let name = bestTVShowsByGenre[tvKey[i]]
    console.log(name);   //Why only one name return??????
    if (name === showName) {
      byGenre = bestTVShowsByGenre[tvKey[i]];
    } else {
      undefined;
    }
    return byGenre;
  }
};

//Test Assertions:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

// console.log(findKeyByValue(bestTVShowsByGenre,"The Wire"));



// const assertEqual = function(actual,expected) {
//   if (actual === expected) {
//     console.log(`✅ ${actual} === ${expected}`);
//   } else {
//     console.log(`❌ ${actual} !== ${expected}`);
//   }
// };



// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);