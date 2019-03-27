import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginUser } from './actions';

class Login extends Component {
  handleClick = () => {
    this.props.loginUser(true);
    this.props.history.push('/home');
  }
  render() {
    return (
      <div>
        <div>user is {this.props.login.isLoggedIn ? 'Logged in' :'Is not Logged in'}</div>
        <button onClick={this.handleClick}>Login here</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser(payload) { 
      dispatch(LoginUser(payload)) 
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);