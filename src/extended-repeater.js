const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if(!options.separator && options.separator !== false) {
    options.separator = "+";
  };

  if(!options.additionSeparator && options.additionSeparator !== false) {
    options.additionSeparator = "|";
  };

  if(!options.repeatTimes && options.repeatTimes !== false) {
    options.repeatTimes = 1;
  }

  if(!options.additionRepeatTimes && options.additionRepeatTimes !== false) {
    options.additionRepeatTimes = 1;
  }

  if(!options.addition && options.addition !== false && options.addition !== null) {
    options.addition = "";
  }

  const arrayStr = [];
  const arrayAddition = [];
  for(let i = 0; i < options.repeatTimes; i += 1) {
    arrayStr.push(String(str));
  };
  for(let i = 0; i < options.additionRepeatTimes; i += 1) {
    arrayAddition.push(String(options.addition));
  };

  const additionStr = arrayAddition.join(options.additionSeparator);

  for(let i = 0; i < arrayStr.length; i += 1) {
    arrayStr[i] += additionStr;
  }

  return arrayStr.join(options.separator);
};

module.exports = {
  repeater
};
