const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let letterTotal = {}; 
  let strArray = str.split('');

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i] !== " ") {
      if (letterTotal[strArray[i]]) {
        letterTotal[strArray[i]] += 1;
      } else {
        letterTotal[strArray[i]] = 1;
      }
    }

  }
  return letterTotal; 
};

console.log(countLetters('LHL'));
console.log(countLetters('Lighthouse is Lit'));
