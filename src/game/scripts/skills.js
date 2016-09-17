'use strict';
const Action = require('../action');
const Formula = require('./formula');

//TODO: Handle cooldowns

const skillsScripts = {
  basicPhysical: function (skillData, source, target) {
    return Action({
      execute : function(battle, game){
        const DD = {
          types : skillData.types,
          raw : skillData.data.damage.base * (source.stats.str.total() * skillData.data.damage.multiplier),
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

