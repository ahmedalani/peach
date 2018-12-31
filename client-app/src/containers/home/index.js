import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { LoginUser } from './actions';
import List from '/Users/3lehamacbook/Desktop/peach/client-app/src/components/List/List.js';
import { SetShowInputForTitle, CreateNewList, AddItemToList, ChangeItem } from './actions';

class Home extends Component {
  handleClick = () => {
    this.props.setShowInputForTitle(true);
  }
  handleKeyPress = (e) => {
    const inputValue = e.target.value;
    if (e.key === 'Enter') {
      this.props.createNewList(inputValue);
      this.props.setShowInputForTitle(false);
      e.target.value = '';
    }
  }
  render() {

    return (
      <div>
        <div>Home Sweet Home!</div>
        <button onClick={this.handleClick}>CreateNewList</button>
        {this.props.showInputForTitle && <input onKeyUp={this.handleKeyPress}></input>}
        {this.props.TODOS.map((todo, index) => <List key={`${todo.title}-${index}`}
          list={todo} index={index}
          addItem={this.props.addItemToList}
          changeItem={this.props.changeItem}
        />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // login: state.login,
    TODOS: state.home.TODOS,
    showInputForTitle: state.home.showInputForTitle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShowInputForTitle(show) {
      dispatch(SetShowInputForTitle(show))
    },
    createNewList(payload) {
      dispatch(CreateNewList(payload))
    },
    addItemToList(payload) {
      dispatch(AddItemToList(payload))
    },
    changeItem(payload) {
      dispatch(ChangeItem(payload))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);