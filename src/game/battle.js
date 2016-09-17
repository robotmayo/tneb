'use strict';

class Battle{
  constructor(){
    this.started = false;
    this.actionQueue = [];
    this.currentAction = null;
  }

  start(player, target){
    this.player = player;
    this.target = target;
    this.started = true;
  }

  update(_g){
    if(this.started === false) return;
    console.log('Updating!');
    this.sortActionQueue();
    const len = this.actionQueue.length;
    for(let i = 0; i < len; i++){
      const a = this.actionQueue[i];
      // If its already finished it will get auto removed because its at the top of the queue
      if(!a.finished){
        if(a._ran) {
          a.update(this, _g);
        }else{
          a.execute(this, _g);
          a._ran = true;
        }
        this.actionQueue.push(a);
        const dead = this.endIfDead();
        // Lets just stop processing if someone died
        if(dead) return;
      }
    }
    // Using len as the divider, cut off all the already run actions
    this.actionQueue = this.actionQueue.slice(len);
  }

  endIfDead(){
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
