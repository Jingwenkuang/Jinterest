import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from "../actions/board_actions";

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
      // return Object.assign({}, state, { [action.board.id]: action.board });
    case RECEIVE_BOARD:

      let selectId = Object.keys(action.board)[0];
      return Object.assign({}, state, {[selectId]: action.board[selectId]});
    case REMOVE_BOARD:
      let newState = Object.assign({}, state);
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
}

export default boardsReducer;