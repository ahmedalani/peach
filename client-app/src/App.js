import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './containers/login';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route excat path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;


