'use strict';
const Action = require('../action');

const skillsScripts = {
  basicPhysical: function (game, user, target, skillData) {
    return Action({
      execute : function(battle, game){
        const raw = user.coreStats.str;
      }
    });
  }
};

module.exports = skillsScripts;

