const Stat = require('../stat');

/**
 * @typedef {Object} statJSON
 * @property {string} fullName
 * @property {string} abv
 * @property {number} min
 * @property {number} max
 * @property {number} current
 * @property {boolean} isInt
 */

/**
 * @typedef {Object} statObject
 * @property {string} fullName
 * @property {string} abv
 * @property {Stat}
 */


/**
 * Create a stat set
 * @param {statJSON[]} stats
 * @return {statObject} An object whose keys are defined in statJSON items
 */
function createStats(stats){
  return Object.keys(stats).reduce((o, k) => {
    const s = stats[k];
    o[k] = {
      fullName : s.fullName,
      abv : s.abv,
      stat : new Stat(s.min, s.max, s.current, s.isInt)
    };
    return o;
  }, {});
}
module.exports = createStats;