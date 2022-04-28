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
    let count = [];
  if (!Array.isArray(arr)) { return 0 }
  if (arr.length == 0) { return 1}   
  
  arr.forEach(elem => count.push(this.calculateDepth(elem)))
  return Math.max(...count) + 1
}
}

module.exports = {
  DepthCalculator
};
