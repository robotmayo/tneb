'use strict';
const MiniSignal = require('mini-signals');

class Actor{
  constructor(coreStats, elementalStats, specialStats, data){
    this.signals = {
      beforeApplyDamage : new MiniSignal(),
      afterApplyDamage : new MiniSignal()
    };
    this.stats = {
      coreStats,
      elementalStats,
      specialStats
    };
    this.name = data.name;
  }

  applyDamage(damageData){
    this.stats.coreStats.hp.stat.subCurrent(damageData.value);
  }

  useSkill(skill){

  }

}

module.exports = Actor;
