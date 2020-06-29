import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import pinsReducer from './pins_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  pins: pinsReducer,
});

export default entitiesReducer;