const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringN = String(n);
  const arrayN = stringN.split('');
  let result = [];
  let minNum = [];
  for(let i = 0; i < arrayN.length; i += 1) {
    result.push(Number(arrayN[i]));
  };
  for(let i = 0; i < result.length; i += 1) {
    let curentNum = result.slice(0);
    curentNum[i] = "";
    minNum.push(Number(curentNum.join('')));
  };
  return Math.max(...minNum);
};

module.exports = {
  deleteDigit
};
