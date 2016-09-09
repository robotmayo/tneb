'use strict';
const DAMAGE_TYPES = require('../data/damage-types.json');

/**
 * @typedef {Object} DamDescType
 * @property {string} type
 * @property {number} ratio
 */

/**
 * Damage Description for use in formulas. Multiple types can be done at once
 * @typedef {Object} DamDesc
 * @property {Object[]} types
 * @property {string} types.type A damage type as defined in damage-types
 * @property {number} types.ratio
 * @property {Object} target
 * @property {Object} source
 * @property {number} raw
 */
const DAMAGE_DESC = {
  types : [],
  target : {}, //Actor
  source : {}, //Actor
  raw : 0
};
module.exports.DamageDesc = function(o){
  return Object.assign({}, DAMAGE_DESC, o)
};

function wrapForCalc(type, value){
  return {type : type.type, value};
}

/**
 *
 * @param DamDesc damageDesc
 * @returns {DamageData[]}
 */
function calculateDamage(damageDesc){
  return damageDesc.types.map(t => {
    switch (type) {
      case DAMAGE_TYPES.PHYSICAL:
        return wrapForCalc(t, calcPhysical(raw, damageDesc));
      case DAMAGE_TYPES.MAGICAL:
        return wrapForCalc(t, calcMagic(raw, damageDesc));
      default:
        return wrapForCalc(t, 0);
    }
  });
}
module.exports.calculateDamage = calculateDamage;


/**
 *
 * @param {number} raw
 * @param {DamDesc} damageDesc
 * @returns {number}
 */
function magicDamage(raw, damageDesc){
  const rawArmor = damageDesc.target.coreStats.res.stat.total() / 6.5;
  const dr = 100 / (100 + (rawArmor / 4.5));
  const actualDamage = raw * damageDesc.ratio;
  return actualDamage * dr;
}
module.exports.magicDamage = magicDamage;

/**
 *
 * @param {number} raw
 * @param {DamDesc} damageDesc
 * @returns {number}
 */
function physicalDamage(raw, damageDesc){
  const rawArmor = damageDesc.target.coreStats.res.stat.total() / 8;
  const dr = 100 / (100 + (rawArmor / 6));
  const actualDamage = raw * damageDesc.ratio;
  return actualDamage * dr;
}
module.exports.physicalDamage = physicalDamage;


function elementalDamage(raw, damageDesc){
  throw new Error('NOT YET IMPLEMENTED');
  const rawArmor = damageDesc.target.coreStats.res.stat.total() / 6.5;
  const dr = 100 / (100 + (rawArmor / 4.5));
  const actualDamage = raw * damageDesc.ratio;
  return actualDamage * dr;
}
module.exports.elementalDamage = elementalDamage;
