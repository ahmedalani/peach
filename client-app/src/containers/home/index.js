import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { LoginUser } from './actions';
import List from '/Users/3lehamacbook/Desktop/peach/client-app/src/components/List/List.js';
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
  
  changeItem = (index = null, indexForItem, item = {}) => {
    console.log(index, indexForItem, item, 'from home.index');
    let todos = [...this.state.TODOS];
    this.setState({ TODOS: todos });
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
        {this.state.TODOS.map((todo, index) => <List list={todo} index={index} addItem={this.addItem} changeItem={this.changeItem}/>)}
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