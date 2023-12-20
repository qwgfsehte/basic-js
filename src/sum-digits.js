const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arrayNum = String(n).split('');
  let result = 0;
  let result2 = 0;
  for (let i = 0; i < arrayNum.length; i += 1) {
      result = result + Number(arrayNum[i]);
  }
    if(result < 9) {
      return result
    }

    if(result > 9) {
      result = String(result).split('');
      for(let j = 0; j < result.length; j += 1) {
          result2 = result2 + Number(result[j]);
      }
      return result2
    }
}

module.exports = {
  getSumOfDigits
};
