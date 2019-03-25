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
      // this.props.editList(null);
      // console.log('this.prop.isEditing... ', this.props.isEditing);
    }
  }
  handleClick = (indexForItem, item) => {
    const listIndex = this.props.index;
    let newItem = { ...item };
    newItem.checked = !newItem.checked;

    this.props.changeItem({ listIndex, indexForItem, newItem });
  }
  handleEdit = (e) => {
    console.log('clicked Edit');
    if (e.key === 'Enter') {
      const title = e.target.value;
      // console.log(title, "this is the title");
      const index = this.props.index;
      // debugger;
      this.props.changeListTitle(index, title);
      e.target.value = '';
      this.props.editList(null);
    }

    //make list title editable
    // this.props.editList(this.props.index);

    //show delete button for list

    //show delete button for items in the list

  }
  isEditing = () => this.props.editList(this.props.index);

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