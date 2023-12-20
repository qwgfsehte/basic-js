const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (arr.length === 0) {
      return 1;
    }
    
    let arraysNum = [];
    for(let i = 0; i < arr.length; i += 1) {
      let curNum = 1;
      if(Array.isArray(arr[i]) === true) {
        curNum += this.calculateDepth(arr[i]);
      }
      arraysNum.push(curNum)
    }
    return Math.max(...arraysNum);
  }
}

module.exports = {
  DepthCalculator
};
