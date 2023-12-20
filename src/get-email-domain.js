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
function getEmailDomain(email) {
  const arrayEmail = email.split('');
  let indexEmail = arrayEmail.lastIndexOf("@");
  if(indexEmail !== -1) {
    arrayEmail.splice(0, indexEmail + 1);
    return String(arrayEmail.join(''));
  };
};

module.exports = {
  getEmailDomain
};
