import * as constants from './constants';

export const LoginUser = (payload) => {
  return {
    type: constants.USER_IS_LOGGED_IN,
    payload
  }
}