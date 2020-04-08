import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';
import PeopleReducer from './peopleReducer';
import DashboardReducer from './peopleReducer';

export default combineReducers({
  appState : LoginReducer,
  peopleState:PeopleReducer,
  dashboardState : DashboardReducer
})