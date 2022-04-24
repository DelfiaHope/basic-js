const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain( email ) {
  let arr = email.split('')
   return arr.splice((arr.lastIndexOf('@') + 1), arr.length - 1).join('')  
}


module.exports = {
  getEmailDomain
};
