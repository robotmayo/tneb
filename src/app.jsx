import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './store';


class App extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <Provider store={store}>
        <h1>Dank</h1>
      </Provider>
    );
  
  }
}

render(<App/>, document.getElementById('rootel'));
