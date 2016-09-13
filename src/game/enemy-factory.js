import actor from './actor';
import EnemyDB from './data/enemies.json';
import SkillDB from './data/skills.json';
import * as _ from 'lodash';

function create(name){
  const ENEMY_DATA = EnemyDB[name];
  if(!ENEMY_DATA) throw new Error('Enemy does not exist!');
  const rank = _.random(ENEMY_DATA.rank.min, ENEMY_DATA.rank.max);
  const skills = ENEMY_DATA.skills.filter(s => _.inRange(rank, s.rank[0], s.rank[1]))
  .map(s => {
    return Object.assign({}, SkillDB[s.name], {data : s.data});
  });
  const stats = {
    coreStats : calcStats(rank, ENEMY_DATA.coreStats)
  }
}

function calcStats(rank, statSheet){
  return Object.keys(statSheet)
  .reduce( (o, k) => {
    o[k] = {

    }
  });
}
