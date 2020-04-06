import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import peopleReducer from './peopleReducer';

export default combineReducers({
  appState : loginReducer,
  peopleReducer
})