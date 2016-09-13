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
    data = data || {};
    super(
      Object.assign({}, data, {
        stats: data.stats || createStats(BASE_STATS)
      })
    );

    this.skills = data.skills || Object.assign(Skills);
  }



}

module.exports = Player;