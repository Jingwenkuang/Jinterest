import { RECEIVE_ALL_BOARDS_PINS, RECEIVE_BOARD_PIN, REMOVE_BOARD_PIN } from "../actions/board_pin_actions";

const boardsPinsReducer = (state={}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BOARDS_PINS:
      return action.boardsPins;
    case RECEIVE_BOARD_PIN:
      // return Object.assign({}, state, { [action.boardPin.id]: action.boardPin });
      return Object.assign({}, state, action.boardPin );
    case REMOVE_BOARD_PIN:
      let newState = Object.assign({}, state);
      delete newState[action.boardPinId];
      return newState;
    default: 
      return state;
  }
}

export default boardsPinsReducer;