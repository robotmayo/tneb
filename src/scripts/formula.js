'use strict';

/**
 * @typedef {Object} DamDescType
 * @property {string} type
 * @property {number} ratio
 */

/**
 * Damage Description for use in formulas. Multiple types can be done at once
 * @typedef {Object} DamDesc
 * @property {Object[]} types
 * @property {string} types.type
 * @property {number} types.ratio
 * @property {Object} target
 * @property {Object} source
 * @property {number} raw
 */
const DAMAGE_DESC = {
  types : [
    {
      type : 'physical',
      ratio : 0.6
    },
    {
      type : 'fire',
      ratio : 0.2
    },
    {
      type : 'poison',
      ratio : 0.2
    }
  ],
  target : {}, //Actor
  source : {}, //Actor
  raw : 900
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
 * @returns {DamDesc[]}
 */
function calculateDamage(damageDesc){
  return damageDesc.types.map(t => {
    switch (type) {
      case 'physical':
        return wrapForCalc(t, calcPhysical(raw, damageDesc));
      case 'magic':
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
