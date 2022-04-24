const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!Array.isArray(members) || !members.length){return false}
  for(i = 0; i < members.length; ){
    if(typeof(members[i]) !== 'string'){
      console.log(members[i])
      members.splice(i,1)              
    }else{i++}
  }

 let first = members.map(el => {
  return el = el.trim()[0].toUpperCase()  
 }) 
 
 return first.sort().join('')
}

module.exports = {
  createDreamTeam
};
