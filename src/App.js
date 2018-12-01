import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import GuttersGrid from './GridBoard.js'
import ItemInfo from './ItemInfo.js';
import Home from './Home.js';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/:url' component={ItemInfo}/>
      </Switch>
    );
  }
}
export default App;
