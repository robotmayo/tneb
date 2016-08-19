'use strict';

class Battle{
  constructor(player, target){
    this.player = player;
    this.target = target;
    this.started = false;
    this.actionQueue = [];
    this.currentAction = null;
  }

  start(){
    this.started = true;
  }

  update(_g){
    if(this.started === false) return;
    if(this.currentAction){
      if(this.currentAction.finished){
        console.log('the current action is finished');
        process.exit(0);
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
      return this.currentAction.update(this, _g);
    }
    this.currentAction = this.actionQueue.shift();
    if(this.currentAction) this.currentAction.execute(this, _g);
  }

  addAction(a){
    this.actionQueue.push(a);
  }

  sortActionQueue(){
    this.actionQueue.sort((a,b) => {
      return a.totalSpeed() > b.totalSpeed();
    });
  }

  end(targetDead, playerDead){

  }
}
module.exports = Battle;
