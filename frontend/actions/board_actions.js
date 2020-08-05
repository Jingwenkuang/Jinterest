import * as BoardAPIUtil from "../util/board_api_util";
//action types
export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";

//action creators 
export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS, 
  boards
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD, 
  board 
});

export const removeBoard = boardId => ({
  type: REMOVE_BOARD, 
  boardId
});

export const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS, 
  errors
});

//thunk action creators 
export const fetchBoards = () => dispatch => {
  return BoardAPIUtil.fetchBoards()
  .then(boards => dispatch(receiveBoards(boards)),
    error => dispatch(receiveBoardErrors(error.responseJSON)) 
  )
};

export const fetchBoard = (boardId) => dispatch => {
  return BoardAPIUtil.fetchBoard(boardId)
    .then(board => dispatch(receiveBoard(board)),
      error => dispatch(receiveBoardErrors(error.responseJSON))
    )
};

export const createBoard = board => dispatch => {
  return BoardAPIUtil.createBoard(board)
    .then(board => dispatch(receiveBoard(board)),
      error => dispatch(receiveBoardErrors(error.responseJSON)))
};

export const updateBoard = board => dispatch => {
  return BoardAPIUtil.updateBoard(board)
    .then(board => dispatch(receiveBoard(board)),
      error => dispatch(receiveBoardErrors(error.responseJSON)))
};

export const deleteBoard = (boardId) => dispatch => {
  return BoardAPIUtil.deleteBoard(boardId)
    .then(boardId => dispatch(removeBoard(boardId)),
      error => dispatch(receiveBoardErrors(error.responseJSON)))
};