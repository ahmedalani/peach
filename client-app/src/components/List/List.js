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
      this.props.addItem(index, item);
      e.target.value = '';
    }
  }
  handleClick = (indexForItem, item) => {
    console.log(item, 'shaba6eee');
    const index = this.props.index;
    item.checked = !item.checked
    this.props.changeItem(index, indexForItem, item);
  }
  render() {
    return (
      <ListDiv>
        <ListTitle >{this.props.list.title}</ListTitle>
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