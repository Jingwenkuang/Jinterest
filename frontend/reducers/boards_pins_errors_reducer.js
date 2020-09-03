import { RECEIVE_BOARD_PIN_ERRORS } from "../actions/board_pin_actions";
import { CLEAR_ERRORS } from "../actions/session_actions";

const boardsPinsErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARD_PIN_ERRORS:
    let errors = action.errors ? action.errors : null;
      return errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default boardsPinsErrorsReducer;