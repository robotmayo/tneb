import React from 'react';
import Game from './game';


export default class Home extends React.Component{
  constructor(props){
    super();
    this.state = Game;
  }

  render(){
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}