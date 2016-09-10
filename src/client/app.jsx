import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './home.jsx';
import Status from './pages/status.jsx';
import Nav from './nav.jsx';
import Dungeon from './pages/dungeon/dungeon.jsx';

class Root extends React.Component{
  constructor(){
    super();
    // this.state = Game;
    // Game.updateList.push({
    //   update : g => this.update(g)
    // });
  }

  update(g){
    this.setState(Game);
  }

  render(){
    return (
      <div>
        <Nav />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={Home} />
      <Route path="status" component={Status}/>
      <Route path="dungeon" component={Dungeon}/>
    </Route>
  </Router>
), document.getElementById('root'));