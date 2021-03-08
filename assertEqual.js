const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;



// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(0, 1);

/*Implement assertEqual Notes:

Exp. 1 -- console.assert(1 === 1); // => nothing happens because true
Exp. 2 -- console.assert(1 === 1.1); // => prints out "Assertion failed" to the terminal



Exp. 3--- const sumBuggy = function(a, b) {
  return a * b;
}

// TEST CODE
console.assert(sumBuggy(1,2)===3); // fails, because bug! */

