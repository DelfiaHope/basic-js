const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(array) {
  if(!Array.isArray(array)){
    throw new Error('\'arr\' parameter must be an instance of the Array!') 
  } 
  let newArr = Array.from(array)

  let flagChange = false
  let result = []
  
  for (i = 0; i < newArr.length; i++) {
    switch(newArr[i]) {
      case '--discard-next':
        if(i < newArr.length - 1){
          flagChange = true;
          i++
        }
      break;

      case '--discard-prev':
        if(flagChange === false && result.length !== 0){
          result.pop();

        }
      break;
      case '--double-next':
        if (newArr[i + 1] !== undefined) {
          result.push(newArr[i + 1]);
        };
      break;
      case '--double-prev':
        if (newArr[i - 1] !== undefined  && flagChange != true) {
          result.push(newArr[i - 1]);
        }
      break;
      default:
        result.push(newArr[i]);
        flagChange = false
        break;

    }
    
  }console.log(result)
  return result
}

 


module.exports = {
  transform
};
