const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof((sampleActivity)) === "number" || typeof((sampleActivity)) === "boolean" || typeof((sampleActivity)) === "object" || typeof((sampleActivity)) === "undefined") {
    return false
  }

  if ((typeof(sampleActivity)) === "string") {
    if ((typeof(Number(sampleActivity))) === NaN) {
      return false
    }
    if (isNaN(sampleActivity) === true) {
      return false
    }

    if (sampleActivity === '' || sampleActivity === ' ' || sampleActivity.includes('\n')) {
      return false
    }

    if(sampleActivity > HALF_LIFE_PERIOD || sampleActivity > MODERN_ACTIVITY) {
      return false
    }

    if(sampleActivity === '0' || Number(sampleActivity) < 0) {
      return false
    }

    const k = 0.693 / HALF_LIFE_PERIOD;
    const result = Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
    return result
  }
}

module.exports = {
  dateSample
};
