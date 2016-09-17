const game = {
  timers : {
    last : 0,
    count : 0,
    delta : 1
  },
  updateList : [],
  start : function(){
    this.timers.last = Date.now();
    this.update();
  },
  update : function(){
    const now = Date.now();
     // We want delta in seconds
    this.timers.last = now;
    this.timers.delta = (now - this.timers.last) / 1000;
    this.updateList.forEach(i => i.update(this));
    this.timers.id = setTimeout(() =>  this.update(), 1000 / 20); // Update at 20 frames per second
  }

};
module.exports = game;