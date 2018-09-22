import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './containers/login';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route excat path="/login" component={Login} />
          <Route exact path="/aboutus" render={() => (<div>about us</div>)} />
        </Switch>
      </div>
    );
  }
}

export default App;
