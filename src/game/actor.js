'use strict';
const MiniSignal = require('mini-signals');
const SkillScripts = require('./scripts/skills');

class Actor{
  constructor(data){
    this.signals = {
      beforeApplyDamage : new MiniSignal(),
      afterApplyDamage : new MiniSignal(),
      beforeSkill : new MiniSignal(),
      afterSkill : new MiniSignal()
    };
    this.stats = data.stats;
    this.name = data.name;
    this.skills = data.skills;
  }

  applyDamage(damageData){
    this.stats.hp.subCurrent(damageData.value);
  }

  useSkill(skillId, target){
    const skill = this.skills.available.filter(s => s.id === skillId)[0];
    if(!skill) throw new Error('Skill not found');
    const use = SkillScripts[skill.action];
    if(!use) throw new Error('Skill not found');
    return use(skill.data, this, target);
  }

}

module.exports = Actor;
