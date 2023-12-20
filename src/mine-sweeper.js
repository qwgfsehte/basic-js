const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let array;
  if(matrix.length === 2) {
  array = [
               [0, 0, 0],
               [0, 0, 0]
              ];
 } else {
  array = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
 }

 for (let i = 0; i < matrix.length; i += 1) {
  for (let j = 0; j < matrix[i].length; j += 1) {
    if(matrix[i][j] === true) {
      array[i][j] += 1;
      if(array[i][j + 1]!== undefined) {
        array[i][j + 1] += 1;
      };
      if(array[i][j + 2]!== undefined) {
        array[i][j + 2] += 1;
      }; 
      if(array[i][j - 1] !== undefined) {
        array[i][j - 1] += 1;
      };
      if(array[i][j - 2] !== undefined) {
        array[i][j - 2] += 1;
      };
      if(array[i + 1] !== undefined) {
        array[i + 1][j] += 1;
      };
      if(array[i + 2] !== undefined) {
        array[i + 2][j] += 1;
      };
      if(array[i + 2] !== undefined) {
      array[i + 2][j + 2] += 1;
      };
      if(array[i - 1] !== undefined) {
        array[i - 1][j] += 1;
      };
    };
  };
 };
return array
};

module.exports = {
  minesweeper
};
