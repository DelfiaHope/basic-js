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
  let origin = (""+n).split("").map(Number)  
  let arrayNum = [];
  for (i = 0; i < origin.length; i++) {
        origin.splice(i,1)
        arrayNum.push(Number(origin.join('')))
        origin = (""+n).split("").map(Number)

  }
  
      let res = arrayNum.sort(function(a,b){ 
        return a - b
      })
    
  return res[res.length - 1]
}

module.exports = {
  deleteDigit
};
