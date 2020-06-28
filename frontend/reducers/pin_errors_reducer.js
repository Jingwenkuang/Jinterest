import { RECEIVE_ALL_ERRORS } from '../actions/pin_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

const pinErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default: 
      return state;
  }
}

export default pinErrorsReducer;