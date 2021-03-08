
const tail = function(y){
  return y.slice(1);
}

module.exports = tail;

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// const tailArray = tail(words);

// assertEqual(words.length, 3); 
// assertEqual(tailArray[0], "Lighthouse"); 
// assertEqual(tailArray[1], "Labs"); 