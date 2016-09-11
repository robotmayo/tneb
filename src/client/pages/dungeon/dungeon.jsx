import React from 'react';
import Game from '../../game';
import Player from '../../../game/player';
import Battle from './battle.jsx';


export default class Dungeon extends React.Component{
  constructor() {
    super();
    this.state = Game.battle;
  }


  startDungeon(){
    Game.battle.start(Game.player, new Player({name : 'Bad Guy'}) );
    this.setState(Game.battle);
  }

  render(){
    if(this.state.started){
      return (
        <Battle battle={this.state} useSkill={f => f}/>
      );
    }
    return (
      <div>
        <button className="btn btn-danger" onClick={() => this.startDungeon()}>Enter the dungeon</button>
      </div>
    );
  }
}