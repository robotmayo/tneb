'use strict';

class Battle{
  constructor(player, target){
    this.player = player;
    this.target = target;
    this.started = false;
    this.paused = false;
    this.roundPoints = 0;
    this.rpTick = 100;
  }
  
  start(){
    this.started = true;
  }

  pause(){
    this.paused = true;
  }

  onUpdate(_g){
    if(this.started || this.paused) return;
    this.roundPoints += this.rpTick * _g.updateTime;
    if(this.roundPoints >= 300){
      this.handleRound();
    }
  }

  handleActions(user, recv){
    if(user.actions){
      for(let i = 0; i < user.actions.length; i++){
        user.actions[0](recv, this);
        if(user.isDead){
          if(recv.isDead){
            return 11;
          }
          return 10;
        }
        if(recv.isDead){
          return 01;
        }
      }
    }
    return 0;
  }

  end(playerDead, targetDead){
  
  }

  handleRound(){
    const pSpd = this.player.coreStats.spd.stat.total();
    const tSpd = this.target.coreStats.spd.stat.total();
    if(pSpd >= tSpd){
      let res = handleActions(this.player, this.target);
      if(res !== 0){
        if(res === 11) return this.end(true, true);
        if(res === 10) return this.end(true, false);
        if(res === 01) return this.end(false, true);
      }
      res = handleActions(this.target, this.player);
      if(res !== 0){
        if(res === 11) return this.end(true, true);
        if(res === 10) return this.end(true, false);
        if(res === 01) return this.end(false, true);
      }
    }else{
    
    }
  }
}
