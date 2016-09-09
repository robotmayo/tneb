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
  },
  update : function(battle, game){

    this.finished = true;
  }
});

function delay(ms){
  return new Promise(function(resolve){
    setTimeout(() => {
      console.log('FUCK THIS SHIT')
      resolve();
    }, ms);
  });
}

test.skip('Battle Testing', async t => {
  t.plan(1);
  let g = new Game();
  let player = new Actor();
  let target = new Actor();
  let b = new Battle(player, target);
  b.addAction(TestAction);
  g.addItem(b);
  g.start();
  b.start();
  console.log('BEFORE');
  await delay(1000);
  console.log('AFTER');
});
