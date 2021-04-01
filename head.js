//Create a function head which returns the first item in the array.

const assertEqual = require('./assertEqual');

const head = function (array) {
  if (!array.length) {
    return undefined;
  } else {
    return array[0];
  }
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
assertEqual(head([6]), 5);

module.exports = head;