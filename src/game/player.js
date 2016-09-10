'use strict';
const Actor = require('./actor');
const BASE_STATS = require('./data/base-stats.json');
const createStats = require('./utils/create-stats');

class Player extends Actor{
  constructor(coreStats, elementalStats, specialStats, data){
    super(
      coreStats || createStats(BASE_STATS.core),
      elementalStats || createStats(BASE_STATS.elemental),
      specialStats || createStats(BASE_STATS.special),
      data
    );
  }
}

module.exports = Player;