import React, { Component } from 'react';
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
  handleClick = (e, indexForItem, item) => {
    e.preventDefault();
    const listIndex = this.props.index;
    let newItem = { ...item };
    newItem.checked = !newItem.checked;

    this.props.changeItem({ listIndex, indexForItem, newItem });
  }
  handleEdit = (e) => {
    if (e.key === 'Enter') {
      const title = e.target.value;
      const index = this.props.index;
      this.props.changeListTitle(index, title);
      e.target.value = '';
      this.props.editList(null);
    }
  }
  isEditing = () => this.props.editList(this.props.index);

  deleteItemFromList = (e, indexForItem) => {
    e.preventDefault();
    const listIndex = this.props.index;
    this.props.deleteItem(listIndex, indexForItem);
  }

  render() {
    return (
      <ListDiv>
        <ListTitle >{this.props.isEditing ?
          <input onKeyUp={(e) => this.handleEdit(e)}></input> :
          this.props.list.title}<button onClick={() => this.isEditing()}>Edit</button>
        </ListTitle>
        <ItemsContainer>

          {this.props.list.items.map((item, i) => {
            return (
            <div>
              <Item key={`${item.label}-${i}`} onClick={(e) =>  this.handleClick(e, i, item)}>
                <div>{item.label}</div>
                <div>{item.checked ? 'X' : '-'}</div>
              </Item>
              <button onClick={(e) =>  this.deleteItemFromList(e, i)}>Delete</button>
            </div>
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