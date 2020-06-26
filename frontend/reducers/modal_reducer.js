import { OPEN_MODAL, CLOSE_MODAL, TOGGLE_SESSION } from '../actions/modal_actions';

export default function modalReducer(state = "login", action) {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return null;
    case TOGGLE_SESSION:
      return state === "login" ? "signup" : "login";
    default:
      return state;
  }
}

