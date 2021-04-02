//Method 1:

const removeSpace = function (str) {
  return str.replace(/\s/g, '');
};

const countLetters = function (str) {
  const noSpaceStr = removeSpace(str);
  let letterTotal = {};

  for (let ltr of noSpaceStr) {
    if (letterTotal[ltr]) {
      letterTotal[ltr] += 1;
    } else {
      letterTotal[ltr] = 1;
    }
  }
  return letterTotal;
};


//Method 2:
// const countLetters = function(str) {
//   let letterTotal = {};
//   let strArray = str.split('');

//   for (let i = 0; i < strArray.length; i++) {
//     if (strArray[i] !== " ") {
//       if (letterTotal[strArray[i]]) {
//         letterTotal[strArray[i]] += 1;
//       } else {
//         letterTotal[strArray[i]] = 1;
//       }
//     }
//   }
//   return letterTotal; //{}
// };

// TEST CODE:
console.log(countLetters('LHL'));
console.log(countLetters('Lighthouse is Lit'));


module.exports = countLetters;
