const _ = require('lodash');

const Actor = require('./actor');
const EnemyDB = require( './data/enemies.json');
const SkillDB = require('./data/skills.json');
const BASE_STATS = require( './data/base-stats.json');
const Stat = require( './stat');


module.exports.create = function create(name){
  const ENEMY_DATA = EnemyDB[name];
  if(!ENEMY_DATA) throw new Error('Enemy does not exist!');
  const rank = _.random(ENEMY_DATA.rank.min, ENEMY_DATA.rank.max);
  const equipped = ENEMY_DATA.skills.filter(s => _.inRange(rank, s.rank[0], s.rank[1]))
  .map(s => {
    return Object.assign({}, SkillDB[s.name], {data : s.data});
  });
  const stats = calcStats(rank, ENEMY_DATA.stats);
  return new Actor({
    skills : {equipped, available : []},
    stats,
    name : ENEMY_DATA.name
  });
};

function calcStats(rank, statSheet){
  return Object.keys(statSheet)
  .reduce( (o, k) => {
    const ss = statSheet[k];
    const STAT_DATA = BASE_STATS[k];
    const current = (ss.value + (rank * ss.perRank)) + (ss.rankMultiplier * rank);
    const max = current;
    const min = 0;
    o[k] = new Stat(Object.assign({}, STAT_DATA, {current, max, min}));
    return o;
  }, {});
}
