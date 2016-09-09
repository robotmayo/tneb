'use strict';
const skillScripts = require('./skills');

function useSkill(game, user, target, skillData){
  if(!skillData) throw new Error('MISSING SKILL DATA');
  const skill = skillScripts[skillData.name];
  const action = skill(game, user, target, skillData);
  game.battle.addAction(action);
}
module.exports.useSkill = useSkill;