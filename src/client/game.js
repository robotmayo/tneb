import Game from '../game/game';
import Player from '../game/player';

Game.player = new Player(null, null, null, {name : 'Danky Kang'});

module.exports = Game;