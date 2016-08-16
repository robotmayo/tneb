'use strict';

const actionTemplate = {
  execute : f => f,
  finished : false,
  update : f => f
};

class Battle{
  constructor(player, target){
    this.player = player;
    this.target = target;
    this.started = false;
    this.actionQueue = [];
    this.currentAction = null;
  }

  onUpdate(_g){
    if(this.started === false) return;
    if(this.currentAction){
      if(currentAction.finished){
        if(this.player.isDead && this.target.isDead) {
          return this.end(true,true);
        }
        if(this.target.isDead){
          return this.end(true);
        }
        if(this.player.isDead){
          return this.end(false, true);
        }
      }
      currentAction.update(this, _g);
    }
    this.currentAction = this.actionQueue.shift();
    this.currentAction.execute(this, _g);
  }

  addAction(a){
    
  }

  end(targetDead, playerDead){

  }
}
