const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let array1 = [];
  for(let i = 0; i < domains.length; i += 1) {
    array1.push(domains[i].split("."));
  };

  for (let i = 0; i < array1.length; i += 1) {
    if(result.hasOwnProperty(`.${array1[i][array1[i].length - 1]}`)) {
      result[`.${array1[i][array1[i].length - 1]}`] += 1;
    } else {
      result[`.${array1[i][array1[i].length - 1]}`] = 1;
    };
  }; 

  for (let i = 0; i < array1.length; i += 1) {
    if(result.hasOwnProperty(`.${array1[i][array1[i].length - 1]}.${array1[i][array1[i].length - 2]}`)) {
      result[`.${array1[i][array1[i].length - 1]}.${array1[i][array1[i].length - 2]}`] += 1;
    } else {
      result[`.${array1[i][array1[i].length - 1]}.${array1[i][array1[i].length - 2]}`] = 1;
    };
  };

  for (let i = 0; i < array1.length; i += 1) {
    if(`${array1[i][array1[i].length - 3]}` !== "undefined") {
      if(result.hasOwnProperty(`.${array1[i][array1[i].length - 1]}.${array1[i][array1[i].length - 2]}.${array1[i][array1[i].length - 3]}`)) {
        result[`.${array1[i][array1[i].length - 1]}.${array1[i][array1[i].length - 2]}.${array1[i][array1[i].length - 3]}`] += 1;
      } else {
        result[`.${array1[i][array1[i].length - 1]}.${array1[i][array1[i].length - 2]}.${array1[i][array1[i].length - 3]}`] = 1;
      };
    };
  };
  return result;
};

module.exports = {
  getDNSStats
};
