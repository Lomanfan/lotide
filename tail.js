const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌ ${actual} !== ${expected}`);
  }
};

const tail = function(y){
  return y.slice(1);
}

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailArray = tail(words);

assertEqual(words.length, 3); 
assertEqual(tailArray[0], "Lighthouse"); 
assertEqual(tailArray[1], "Labs"); 