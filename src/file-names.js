const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let arrayDuplicates = [];
  let arrayDuplicates2 = [];
  let num = 1;
  for (let i = 0; i < names.length; i += 1) {
    for (let j = i + 1; j < names.length; j += 1) {
      if (names[i] === names[j] && !arrayDuplicates.includes(names[i])) {
        arrayDuplicates.push(names[i]);
      }
    }
      if(arrayDuplicates.includes(names[i]) === true && i > 0) {
          names[i] = names[i] + "(" + (num) + ")"
          num = num + 1;
      }
  }
  num = 1
  for (let i = 0; i < names.length; i += 1) {
     for (let j = i + 1; j < names.length; j += 1) {
         if (names[i] === names[j] && !arrayDuplicates2.includes(names[i])) {
         arrayDuplicates2.push(names[i]);
         }
     } 
      if(arrayDuplicates2.includes(names[i]) === true && i > 1) {
          names[i] = names[i] + "(" + (num) + ")"
          num = num + 1;
      }
  }
  return names;
}

module.exports = {
  renameFiles
};
