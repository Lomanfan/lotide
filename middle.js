
//find Middle
const middle = function(array) {
  let midArr = [];
  let middleIndx = Math.floor(array.length / 2);
  if (array.length === 1 || array.length === 2) {
    midArr = [];
  } else if (array.length % 2 !== 0) {
    midArr = [array[middleIndx]];
  } else {
    midArr = [array[middleIndx - 1], array[middleIndx]];
  }
  return midArr;
};

module.exports = middle;
