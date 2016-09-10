import React from 'react';
import Game from '../../game';
import BattleCard from './battle-card.jsx';
import Player from '../../../game/player';


export default class Dungeon extends React.Component{
  constructor() {
    super();
    this.state = Game.battle;
  }


  startDungeon(){
    console.log('starting THIS DICK');
    Game.battle.start(Game.player, new Player({name : 'Bad Guy'}) );
    this.setState(Game.battle);
  }

  render(){
    if(this.state.started){
      return (
        <div>
          <BattleCard actor={this.state.player}/>
        </div>
      );
    }
    return (
      <div>
        <button className="btn btn-danger" onClick={() => this.startDungeon()}>Enter the dungeon</button>
      </div>
    );
  }
}