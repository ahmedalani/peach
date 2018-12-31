import { combineReducers } from 'redux';
import login from '../containers/login/reducer';
import home from '../containers/home/reducer';

const appReducers = combineReducers (
  //reducers...
  {
    login,
    home
  }
);

export default appReducers;