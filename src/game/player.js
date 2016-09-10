'use strict';
const Actor = require('./actor');
const BASE_STATS = require('./data/base-stats.json');
const createStats = require('./utils/create-stats');

const Skills = {
  available : [],
  equipped : []
};

class Player extends Actor{
  constructor(data) {
    super(
      Object.assign({}, data, {
        coreStats: data.coreStats || createStats(BASE_STATS.core),
        elementalStats: data.elementalStats || createStats(BASE_STATS.elemental),
        specialStats: data.specialStats || createStats(BASE_STATS.special),
      })
    );

    this.skills = data.skills || Object.assign(Skills);
  }



}

module.exports = Player;