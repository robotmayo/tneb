'use strict';
const MiniSignal = require('mini-signals');

class Actor{
  constructor(data){
    this.signals = {
      beforeApplyDamage : new MiniSignal(),
      afterApplyDamage : new MiniSignal()
    };
    this.stats = data.stats;
    this.name = data.name;
    this.skills = data.skills;
  }

  applyDamage(damageData){
    this.stats.hp.subCurrent(damageData.value);
  }

  useSkill(skill){

  }

}

module.exports = Actor;
