//Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.

const assertEqual = require('./assertEqual');

const tail = function (array) {
  if (array) {
    return array.slice(1)
  }
};


//TEST CODE:
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// // assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail! JavaScript doesn't allow the use of === or == to compare two arrays.

// TEST CODE TO ENSURE ORIGINAL ARRAY IS NOT MODIFIED FROM TAIL FUNCTION:
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


module.exports = tail;

