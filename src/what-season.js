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
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }
  
  let monthDate = date.getMonth();
  if(monthDate === 11 || monthDate === 12 || monthDate === 1) {
    return "winter"
  }

  if(monthDate === 2 || monthDate === 3 || monthDate === 4) {
    return "spring"
  }

  if(monthDate === 5 || monthDate === 6 || monthDate === 7) {
    return "summer"
  }

  if(monthDate === 8 || monthDate === 9 || monthDate === 10) {
    return "autumn"
  }

  return "winter";
}

module.exports = {
  getSeason
};
