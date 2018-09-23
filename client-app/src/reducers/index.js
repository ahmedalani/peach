import { combineReducers } from 'redux';
import login from '../containers/login/reducer';

const appReducers = combineReducers (
  //reducers...
  {
    login
  }
);

export default appReducers;