import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import PinCreateFrom from './pin_create_form';
import { createPin } from '../../actions/pin_actions';
import { clearErrors } from '../../actions/session_actions';
import { fetchBoards } from '../../actions/board_actions';
import { createBoardPin } from '../../actions/board_pin_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
  errors: state.errors.pins,
  boards: Object.values(state.entities.boards).filter(board => (
    board.user_id === state.session.currentUserId
  )),

})

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  createPin: pin => dispatch(createPin(pin)),
  clearErrors: () => dispatch(clearErrors()),
  createBoardPin: boardPin => dispatch(createBoardPin(boardPin)),
  openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinCreateFrom));