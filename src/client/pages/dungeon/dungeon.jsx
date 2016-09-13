import React from 'react';

import Game from '../../game';
import Player from '../../../game/player';
import Battle from './battle.jsx';
import EnemyFactory from '../../../game/enemy-factory';


export default class Dungeon extends React.Component{
  constructor() {
    super();
    this.state = Game.battle;
  }


  startDungeon(){
    Game.battle.start(Game.player, EnemyFactory.create('testSlime') );
    this.setState(Game.battle);
  }

  useSkill(skillName){
    this.state.player.useSkill(skillName, this.state.target);
  }

  render(){
    if(this.state.started){
      return (
        <Battle battle={this.state} useSkill={s => this.useSkill(s)}/>
      );
    }
    return (
      <div>
        <button className="btn btn-danger" onClick={() => this.startDungeon()}>Enter the dungeon</button>
      </div>
    );
  }
}