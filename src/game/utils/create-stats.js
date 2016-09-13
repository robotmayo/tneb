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
    o[k] =  new Stat(
        {
          min : s.min,
          max : s.max,
          current : s.current,
          isInt : s.isInt,
          fullName : s.fullName,
          abv : s.abv
        }
    );
    return o;
  }, {});
}
module.exports = createStats;