// const assertEqual = require('./assertEqual');

const head = function(x) {
  if (x.length === 0) {
    return undefined;
  } else {
    return x[0];
  }
};

module.exports = head;

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 5);
// assertEqual(head([6]), 5);