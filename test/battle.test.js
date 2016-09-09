'use strict';
import test from 'ava';

import Actor from '../src/actor';
import Battle from '../src/battle';
import Action from '../src/action';

class Game{

  constructor(){
    this.timerID = 0;
    this.items = [];
    this.lastTime = 0;
    this.timeDiff = 0;
    this.stop = false;
  }

  update(){
    if(this.stop) return;
    const now = Date.now();
    this.timeDiff = now - this.lastTime;
    this.items.forEach(i => i.update(this));
    this.lastTime = now;
    this.timerID = setTimeout(() => this.update(), 48);
  }

  start(){
    this.update();
  }

  addItem(i){
    this.items.push(i);
  }

}

const TestAction = Object.assign({
  finished : false,
  execute : function(battle, game){
    console.log('executing');
  },
  update : function(battle, game){
    console.log('updated');
    console.log('IM DONE');
    this.finished = true;
  }
});

function delay(ms){
  return new Promise(function(resolve, reject){
    setTimeout(resolve, ms);
  });
}

test('Battle Testing', t => {
  let g = new Game();
  let player = new Actor();
  let target = new Actor();
  let b = new Battle(player, target);
  b.addAction(TestAction);
  g.addItem(b);
  g.start();
  b.start();
  return delay(5000).then(() => t.pass());
});
