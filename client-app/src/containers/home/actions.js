import * as constants from './constants';

export const SetShowInputForTitle = (payload) => {
  return {
    type: constants.SHOW_INPUT_FOR_TITLE,
    payload
  }
}
export const CreateNewList = (payload) => {
  return {
    type: constants.CREATE_NEW_LIST,
    payload
  }
}
export const AddItemToList = (payload) => {
  return {
    type: constants.ADD_ITEM_TO_LIST,
    payload
  }
}
export const ChangeItem = (payload) => {
  return {
    type: constants.CHANGE_ITEM,
    payload
  }
}
export const HandleEditList = (payload) => {
  return {
    type: constants.HANDLE_EDIT_LIST,
    payload
  }
}
export const SetShowInputForEdit = (payload) => {
  return {
    type: constants.SHOW_INPUT_FOR_EDIT,
    payload
  }
}
export const ChangeListTitle = (ListIndex, title) => {
  return {
    type: constants.CHANGE_LIST_TITLE,
    payload:{index: ListIndex, title}
  }
}
