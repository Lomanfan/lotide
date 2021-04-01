// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//The function should report back how many instances of each string
//were found in the allItems array of strings.
//Our function countOnly needs to return a proper report on all the strings found in the input array,
//and their respective counts. Therefore it will need to return an object that can represent the stats.


//Questions: when do you declare a variable outside inside of a function?
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let result1 = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (result1[item]) {
        result1[item] += 1;
      } else {
        result1[item] = 1;
      }
    }
  }
  return result1;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


module.exports = countOnly;