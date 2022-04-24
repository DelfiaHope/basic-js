const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];
  let arrStr = str.split('');
  
  for (i = 0; i < arrStr.length;){
    let current = arrStr[i];
    let count = 1;
    if(current !== arrStr[i + 1]){
      result.push(arrStr[i])
      i++
    } else{
      while(current === arrStr[i + 1]){
         count++;
         i++
      }
      result.push(count)      
    }    
  }  
  return result.join('')
  
}

module.exports = {
  encodeLine
};
