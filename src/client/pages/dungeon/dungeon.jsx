import React from 'react';

import Game from '../../game';
import Player from '../../../game/player';
import Battle from './battle.jsx';
import EnemyFactory from '../../../game/enemy-factory';


export default class Dungeon extends React.Component{
  constructor() {
    super();
    this.state = {battle : Game.battle};
  }


  startDungeon(){
    Game.battle.start(Game.player, EnemyFactory.create('testSlime') );
    this.setState({battle : Game.battle});
  }

  useSkill(skillName){
    const action = this.state.battle.player.useSkill(skillName, this.state.target);
    this.state.battle.addAction(action);
  }

  render(){
    if(this.state.battle.started){
      return (
        <Battle battle={this.state.battle} useSkill={s => this.useSkill(s)}/>
      );
    }
    return (
      <div>
        <button className="btn btn-danger" onClick={() => this.startDungeon()}>Enter the dungeon</button>
      </div>
    );
  }
}