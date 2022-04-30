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
  let defRepeatTim = 1,
     deftSeparat = '+',
     deftAdd = '',
     deftAddTimes = 1,
     deftaddSeparat = '|';

  if(options['repeatTimes']){
    defRepeatTim = options.repeatTimes
  }
  if(options['separator']){
    deftSeparat = options.separator
  }
  if(options['addition'] !== undefined){
    deftAdd = options.addition + ''
  }
  if(options['additionRepeatTimes']){
    deftAddTimes = options.additionRepeatTimes
  }
  if(options['additionSeparator']){
    deftaddSeparat = options.additionSeparator
  }
   console.log(defRepeatTim, deftSeparat, deftAdd, deftAddTimes, deftaddSeparat)
   const repeat = (string, num, share) =>{
     let array = [];
     for(i = 0; i < num; i++){
       array.push(string)
     }
     return array.join(`${share}`)        
   }

  let addString = repeat(deftAdd, deftAddTimes, deftaddSeparat);
  console.log(addString)
  let newStr = str + addString;
  console.log(newStr)
  let finish = repeat(newStr, defRepeatTim, deftSeparat)
  
  return finish
}

module.exports = {
  repeater
};
