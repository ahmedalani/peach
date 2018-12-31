import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
import './List.css';
import styled from 'styled-components'

const ListDiv = styled.div`
  /* background-color: w; */
`;
const ListTitle = styled.div`
  padding: 10px;
  border: 1px solid black;
  border-radius: 1px;
  &:hover { 
    background:red;
  }
`;
const ItemsContainer = styled.div`
  /* display:flex; */
`;
const Item = styled.div`
  display:flex;
  margin:5px;
  padding:10px;
  border: 1px solid black;
  justify-content: space-between;
`;

class List extends Component {
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const inputValue = e.target.value;
      const item = {
        label: `${inputValue}`,
        checked: false
      }
      const index = this.props.index;
      this.props.addItem({ index, item });
      e.target.value = '';
    }
  }
  handleClick = (indexForItem, item) => {
    const listIndex = this.props.index;
    let newItem = {...item};
    newItem.checked = !newItem.checked; 

    this.props.changeItem({listIndex, indexForItem, newItem});
  } 
  handleEdit = () => {
    console.log('clicked Edit');
  }
  render() {
    return (
      <ListDiv>
        <ListTitle >{this.props.list.title}<button onClick={() => this.handleEdit()}>Edit</button></ListTitle>
        <ItemsContainer>

          {this.props.list.items.map((item, i) => {
            return (
              <Item key={`${item.label}-${i}`} onClick={() => this.handleClick(i, item)}>
                <div>{item.label}</div>
                <div>  {item.checked ? 'X' : '-'}</div>
              </Item>
            )
          })
          }
        </ItemsContainer>
        <input onKeyUp={(e) => this.handleKeyPress(e)}></input>
      </ListDiv>
    );
  }
}

export default List;