const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let letterTotal = {}; // {} object
  let strArray = str.split(''); //''split after each letter
  //str2 = "123,240,432"
  //str2.split(",")>> [123,240,432]
  //console.log(strArray);

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] !== " ") {
      if (letterTotal[strArray[i]]) {
        letterTotal[strArray[i]] += 1;
      } else {
        letterTotal[strArray[i]] = 1;
      }
    }

  }
  return letterTotal; //return key value pair object;
};

console.log(countLetters('LHL'));
console.log(countLetters('Lighthouse is Lit'));


module.exports = countLetters;
