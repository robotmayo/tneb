'use strict';
const Stat = require('./stat');
const MiniSignal = require('mini-signals');
const createStats = require('./utils/create-stats');


class Actor{
  constructor(coreStats, elementalStats, specialStats){
    this.signals = {
      beforeApplyDamage : new MiniSignal(),
      afterApplyDamage : new MiniSignal()
    };
    this.stats = {
      coreStats,
      elementalStats,
      specialStats
    };
  }

  takeDamage(value, type){
    switch(type){
      case 'hp':  return this._takeHPDamage(value);
      case 'physical': return this._takePhysicalDamage(value);
      case 'magic': return this._takeMagicDamage(value);
      default:
        throw new Error('invalid damage type');
    }
  }

  _takeHPDamage(value){
    this.coreStats.hp.stat.subCurrent(value);
    return value;
  }

  _takePhysicalDamage(value){
    const armor = this.coreStats.res.stat.total() / 8;
    const dr = 100 / (100 + (armor / 6));
    const dmg = value * dr;
    this.coreStats.hp.stat.subCurrent(value);
    return dmg;
  }

  _takeMagicDamage(value){
    const armor = this.coreStats.mag.stat.total() / 5;
    const dr = 100 / (100 + (armor / 9));
    const dmg = value * dr;
    this.coreStats.hp.stat.subCurrent(value);
    return dmg;
  }

  useSkill(skill){

  }

}

module.exports = Actor;
