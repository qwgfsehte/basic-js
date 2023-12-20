const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  let num = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if(arr[i] !== arr[i + 1]) {
      result.push(num + 1);
      result.push(arr[i]);
      num = 0;
    } else if(arr[i] === arr[i + 1]) {
      num += 1;
    }
  }

  for (let i = 0; i < result.length; i += 1) {
    if(result[i] === 1) {
      result[i] = "";
    }
  }
  return result.join('')
}

module.exports = {
  encodeLine
};
