import Game from '../game/game';
import Player from '../game/player';
import Battle from '../game/battle';
import SkillData from '../game/data/skills.json';

const playerData = {
  name : 'Ultimate Danky Kang'
};
const player = new Player(playerData);
player.skills.available.push(SkillData.basicAttack);

Game.player = player;

Game.battle = new Battle();

module.exports = Game;