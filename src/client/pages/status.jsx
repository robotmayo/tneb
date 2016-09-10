import React from 'react';
import Game from '../game';
import Stat from '../components/stat.jsx';
import Skill from '../components/skills.jsx';

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
          <Skill skill={this.state.player.skills.available[0]} />
        </div>
      </div>
    );
  }
}