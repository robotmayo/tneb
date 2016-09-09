'use strict';

const ACTION = {
  finished : false,
  update : function(battle, game){
    this.finished = true;
  },
  execute : function(battle, game){
  },
  totalSpeed : function(){
    return 0;
  },
  source : null
};

module.exports = function(o){
  return Object.assign({}, ACTION, o);
};
