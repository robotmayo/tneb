const game = {
  timers : {
    last : 0,
    count : 0,
    delta : 1
  },
  updateList : [],
  start : function(){
    last = Date.now();
    this.update();
  },
  update : function(){
    const now = Date.now();
    const delta = (now - last) / 1000; // We want delta in seconds
    this.timers.delta = delta;
    this.timers.last = now;
    this.updateList.forEach(i => i.update(this));
    this.timers.id = setTimeout(() =>  this.update(), (1000 * 20) / 60); // Update at 20 frames per second
  }

};
module.exports = game;