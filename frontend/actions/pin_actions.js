import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

const receiveAllPins = (pins) => ({
  type: RECEIVE_ALL_PINS,
  pins
})

const receivePin = (pin) => ({
  type: RECEIVE_PIN,
  pin
})

const removePin = (pinId) => ({
  type: REMOVE_PIN,
  pinId 
})

const receivePinErrors = (errors) => ({
  type: RECEIVE_PIN_ERRORS,
  errors
})

//thunk 
export const fetchAllPins = () => dispatch => {
  return PinApiUtil.fetchAllPins()
    .then(pins => dispatch(receiveAllPins(pins)),
      error => dispatch(receivePinErrors(error.responseJSON)))
}

export const fetchPin = (pinId) => dispatch => {
  return PinApiUtil.fetchPin(pinId)
    .then(pin => dispatch(receivePin(pin)),
      error => dispatch(receivePinErrors(error.responseJSON)))
}

export const createPin = (pin) => dispatch => {
  return PinApiUtil.createPin(pin)
    .then(createdPin => dispatch(receivePin(createdPin)),
      error => dispatch(receivePinErrors(error.responseJSON)))
}

export const updatePin = (pin) => dispatch => {
  return PinApiUtil.updatePin(pin)
    .then(updatedPin => dispatch(receivePin(updatedPin)),
      error => dispatch(receivePinErrors(error.responseJSON)))
}

export const deletePin = (pinId) => dispatch => {
 
  return PinApiUtil.deletePin(pinId)
    .then((pinId) => dispatch(removePin(pinId)),
      error => dispatch(receivePinErrors(error.responseJSON)))
}

export const saveToBoard = (boardPin) => dispatch => {
  return PinAPIUtil.saveToBoard(boardPin)
    .then(pinId => dispatch(fetchPin(pinId)),
      error => dispatch(receivePinErrors(error.responseJSON)))
}