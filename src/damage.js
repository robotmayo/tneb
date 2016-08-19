'use strict';

const DamageDesc = {
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

function wrapForCalc(type, value){
  return {type : type.type, value};
}

function calculateDamage(damageDesc){
  const finalDamage = damageDesc.types.map(t => {
    switch(type){
      case 'physical':
        return wrapForCalc(t, calcPhysical(damageDesc, damageDesc.source, damageDesc.target))
      case 'magic':
        return wrapForCalc(t, calcMagic(damageDesc, damageDesc.source, damageDesc.target))
      defualt:
        return wrapForCalc(t,0);
    }
  });
  return finalDamage;
}
module.exports.calculateDamage = calculateDamage;



function calcMagic(raw, ratio, source, target){
  const rawArmor = this.coreStats.res.stat.total() / 6.5;
  const dr = 100 / (100 + (rawArmor / 4.5));
  const actualDamage = raw * ratio;
  const dmg = actualDamage * dr;
  return dmg;
}
module.exports.calcMagic = calcMagic;

function calcPhysical(raw, ratio, source, target){
  const rawArmor = this.coreStats.res.stat.total() / 8;
  const dr = 100 / (100 + (rawArmor / 6));
  const actualDamage = raw * ratio;
  const dmg = actualDamage * dr;
  return dmg;
}
module.exports.calcPhysical = calcPhysical;
