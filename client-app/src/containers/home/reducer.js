import * as constants from './constants';

const intialState = {
  user: undefined,
  isLoggedIn:false
}
const login = (
  /*state*/
  state = intialState,
  /*action*/
  { type, payload }
) => {
  switch (type) {
    case constants.USER_IS_LOGGED_IN:
      return {
        ...state, isLoggedIn:payload
      }
    default:
      return state
  }
}

export default login;
