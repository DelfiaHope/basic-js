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
 const calculate = (matrix, y, x) => {
  if (typeof matrix[y] !== 'undefined' && typeof matrix[y][x] !== 'undefined' && matrix[y][x]) {
      return 1;
  }

  return 0;
}
function minesweeper(matr) {
  let answer = [];

  matr.forEach((elY, indexY) => {
              let answerY = [];
      elY.forEach((elX, indexX) => {
                  let count = 0;
        count += calculate(matr, indexY + 0, indexX + 1);
        count += calculate(matr, indexY + 1, indexX + 1);
        count += calculate(matr, indexY + 1, indexX + 0);
        count += calculate(matr, indexY + 1, indexX - 1);
        count += calculate(matr, indexY + 0, indexX - 1);
        count += calculate(matr, indexY - 1, indexX - 1);
        count += calculate(matr, indexY - 1, indexX + 0);
        count += calculate(matr, indexY - 1, indexX + 1);
                  answerY.push(count);
      })
              answer.push(answerY);
  })

  return answer;

}



module.exports = {
  minesweeper
};
