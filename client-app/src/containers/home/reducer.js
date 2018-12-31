import * as constants from './constants';

const intialState = {
  TODOS: [],
  showInputForTitle: false
}
const home = (
  /*state*/
  state = intialState,
  /*action*/
  { type, payload }
) => {
  switch (type) {
    case constants.SHOW_INPUT_FOR_TITLE:
      return { ...state, showInputForTitle: payload }

    case constants.CREATE_NEW_LIST:
      const newTODOS = [...state.TODOS];
      newTODOS.push({
        title: `${payload}`,
        items: []
      });
      return { ...state, TODOS: newTODOS }

    case constants.ADD_ITEM_TO_LIST:
      let todosToAddItem = [...state.TODOS];
      const listToUpdate = todosToAddItem[payload.index];
      listToUpdate.items.push(payload.item);
      todosToAddItem[payload.index] = listToUpdate;
      return { ...state, TODOS: todosToAddItem }

    case constants.CHANGE_ITEM:
      let todosToChangeItemLabel = [...state.TODOS];
      todosToChangeItemLabel[payload.listIndex].items[payload.indexForItem] = payload.newItem;
      return { ...state, TODOS: todosToChangeItemLabel };

    default:
      return state
  }
}

export default home;
