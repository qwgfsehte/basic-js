const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = [];
  for(let i = 0; i < arr.length; i += 1) {
    if(arr[i] === -1) {
        index.push(i);
    }
  }
  
  function compareNum(a, b) {
    return a - b;
  }
  
  const arrSort = arr.sort(compareNum);
  const indexNum = arrSort.lastIndexOf(-1);
  const result = arrSort.splice(indexNum + 1);
  
  for(let i = 0; i < index.length; i += 1) {
    result.splice(index[i], 0, -1)
  }

  return result
}

module.exports = {
  sortByHeight
};
