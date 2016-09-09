'use strict';
const Action = require('../action');
const Formula = require('./formula');

//TODO: Handle cooldowns

const skillsScripts = {
  basicPhysical: function (game, user, target, skillData) {
    return Action({
      execute : function(battle, game){
        const DD = {
          types : skillData.types,
          raw : skillData.damage.base * (user.stats.coreStats.str * skillData.damage.multiplier),
          source : 'basicPhysical'
        };
        const damage = Formula.calculateDamage(DD);
        target.applyDamage(damage);
      }
    });
  }
};

module.exports = skillsScripts;

