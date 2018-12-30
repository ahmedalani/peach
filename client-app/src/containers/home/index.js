import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { LoginUser } from './actions';
import List from '/Users/3lehamacbook/Desktop/peach/client-app/src/components/List/List.js';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

const TODOS = [
  // {
  //   title: '',
  //   items: [

  //    ]
  // }
];

class Home extends Component {
  state = {
    TODOS: TODOS,
    showInputForTitle: false,
  }
  handleClick = () => {
    this.setState({ showInputForTitle: true })
  }
  addItem = (index = null, item = {}) => {
    let todos = [...this.state.TODOS];
    const listToUpdate = todos[index];
    listToUpdate.items.push(item);
    todos[index] = listToUpdate;
    this.setState({ TODOS: todos });
  }

  changeItem = (listIndex = null, indexForItem, newItem = {}) => {

    // -first copy the todos, 
    let todos = [...this.state.TODOS];

    // - then find the item  && replace item 
    todos[listIndex].items[indexForItem] = newItem;

    this.setState({ TODOS: todos });

    // console.log(listIndex, indexForItem, newItem, 'from home.index');
    // console.log(todos[listIndex].items[indexForItem].checked, 'todos[listIndex]');
    // const updatedItem = !todos[listIndex].items[indexForItem].checked
    // this.setState({ TODOS: !todos[listIndex].items[indexForItem].checked }); 
  }
  handleKeyPress = (e) => {
    const inputValue = e.target.value;

    if (e.key === 'Enter') {
      // console.log('do validate');
      const newTODOS = this.state.TODOS;

      newTODOS.push({
        title: `${inputValue}`,
        items: [
          // {
          //   label: "",
          //   checked: null,
          // },
          // {
          //   label: "",
          //   checked: null
          // }
        ]
      })
      this.setState({ TODOS: newTODOS })
      e.target.value = '';
    }
  }
  render() {

    return (
      <div>
        <div>Home Sweet Home!</div>
        <button onClick={this.handleClick}>CreateNewList</button>
        {this.state.showInputForTitle && <input onKeyUp={this.handleKeyPress}></input>}
        {this.state.TODOS.map((todo, index) => <List list={todo} index={index} addItem={this.addItem} changeItem={this.changeItem} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    // login: state.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // loginUser(payload) { 
    //   dispatch(LoginUser(payload)) 
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);