import * as BoardPinAPIUtil from "../util/board_pin_api_util";

//action types
export const RECEIVE_ALL_BOARDS_PINS = "RECEIVE_ALL_BOARDS_PINS";
export const RECEIVE_BOARD_PIN = "RECEIVE_BOARD_PIN";
export const REMOVE_BOARD_PIN = "REMOVE_BOARD_PIN";
export const RECEIVE_BOARD_PIN_ERRORS = "RECEIVE_BOARD_PIN_ERRORS";

//action creators 
export const receiveAllBoardsPins = boardsPins => ({
  type: RECEIVE_ALL_BOARDS_PINS, 
  boardsPins 
});

export const receiveBoardPin = boardPin => ({
  type: RECEIVE_BOARD_PIN, 
  boardPin
});

export const removeBoardPin = boardPinId => ({
  type: REMOVE_BOARD_PIN,
  boardPinId
});

export const receiveBoardPinErrors = errors => {

  return (
  {
    type: RECEIVE_BOARD_PIN_ERRORS,
    errors
  }
  )
};

//thunk action creators 
export const fetchAllBoardsPins = () => dispatch => {
  return BoardPinAPIUtil.fetchAllBoardsPins()
    .then(boardsPins => dispatch(receiveAllBoardsPins(boardsPins)),
      error => dispatch(receiveBoardPinErrors(error.responseJSON))
    )
};

export const createBoardPin = (boardPin) => dispatch => {

  return BoardPinAPIUtil.createBoardPin(boardPin)
    .then(boardPin => dispatch(receiveBoardPin(boardPin)),
      error => dispatch(receiveBoardPinErrors(error.responseJSON))
    )
};

export const deleteBoardPin = (boardPinId) => dispatch => {
  return BoardPinAPIUtil.deleteBoardPin(boardPinId)
    .then(boardPinId => dispatch(removeBoardPin(boardPinId)),
      error => dispatch(receiveBoardPinErrors(error.responseJSON))
    )
};