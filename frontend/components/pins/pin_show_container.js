import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PinShow from './pin_show';
import { clearErrors } from '../../actions/session_actions';
import { fetchPin, updatePin, deletePin, saveToBoard } from '../../actions/pin_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchBoards, createBorad } from'../../actions/board_actions';
import { fetchUser, fetchAllUsers } from '../../actions/user_actions';
import { createBoardPin } from '../../actions/board_pin_actions';

const mapStateToProps = (state, ownProps) => {
  let id =
    ownProps.location.pathname.split("/").pop();

  return {
    pinId: id,
    pin: state.entities.pins[id],
    // pin: state.entities.pins[ownProps.match.params.pinId],
    pins: state.entities.pins,
    users: state.entities.users,
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
    // boards: Object.values(state.entities.boards),
    boards: Object.values(state.entities.boards).filter(board => (
      board.user_id === state.session.currentUserId
    )),
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchBoards: () => dispatch(fetchBoards()),
  clearErrors: () => dispatch(clearErrors()),
  // updatePin: (pin) => dispatch(updatePin(pin)),
  // deletePin: pinId => dispatch(deletePin(pinId)),
  // saveToBoard: (boardPin) => dispatch(saveToBoard(boardPin)),
  createBoardPin: boardPin => dispatch(createBoardPin(boardPin)),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow));