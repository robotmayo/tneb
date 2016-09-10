'use strict';
const Action = require('../action');
const Formula = require('./formula');

//TODO: Handle cooldowns

const skillsScripts = {
  basicPhysical: function (game, source, target, skillData) {
    return Action({
      execute : function(battle, game){
        const DD = {
          types : skillData.types,
          raw : skillData.damage.base * (source.stats.coreStats.str.stat.total() * skillData.damage.multiplier),
          source,
          target
        };
        const damage = Formula.calculateDamage(DD);
        target.applyDamage(damage[0]);
      }
    });
  }
};

module.exports = skillsScripts;

