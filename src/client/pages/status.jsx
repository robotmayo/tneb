import React from 'react';
import Game from '../game';
import Stat from '../components/stat.jsx';

export default class Home extends React.Component{
  constructor(props){
    super();
    this.state = Game;
  }

  render(){
    return (
      <div className="row">
        <div className="col-lg-6">
          <h2>{this.state.player.name}</h2>
          <Stat stat={this.state.player.stats.coreStats.hp} currentMax={true}/>
        </div>
      </div>
    );
  }
}