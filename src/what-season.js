const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn']
  if(!date || date == undefined){
    return 'Unable to determine the time of year!'
  }
  if(!date.getMonth  || Object.getOwnPropertyNames(date).length !== 0){
    //console.log(Object.getOwnPropertyNames(date).length)
    throw new Error('Invalid date!') 
  }else{
    let mounths = date.getMonth()
      if(mounths == 11 || mounths == 0 || mounths == 1){
        return seasons[0]
      }if(mounths == 2 || mounths == 3 || mounths == 4){
        return seasons[1]
      }if(mounths == 5 || mounths == 6 || mounths == 7){
        return seasons[2]
      }if(mounths == 8 || mounths == 9 || mounths == 10){
        return seasons[3]
      }  
}
}

module.exports = {
  getSeason
};
