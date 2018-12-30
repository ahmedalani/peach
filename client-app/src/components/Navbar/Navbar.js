import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

  goTo = (route) => {
    this.props.history.push(`/${route}`);
  }

  render() {
    return (
      <div className="navbar">
        <div className={this.props.location.pathname.includes('home') ? 'navbar-item--active' : 'navbar-item'} onClick={() => this.goTo('home')}>home</div>
        <div className={this.props.location.pathname.includes('calendar') ? 'navbar-item--active' : 'navbar-item'} onClick={() => this.goTo('calendar')}>calendar</div>
        <div className={this.props.location.pathname.includes('deleted') ? 'navbar-item--active' : 'navbar-item'} onClick={() => this.goTo('deleted')}>deleted</div>
      </div>
    );
  }
}

export default withRouter(Navbar);