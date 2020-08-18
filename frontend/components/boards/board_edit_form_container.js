import { connect } from 'react-redux';
import BoardEditForm from './board_edit_form';
import { clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchBoard, fetchBoards, updateBoard, deleteBoard } from '../../actions/board_actions';
import { fetchAllPins } from "../../actions/pin_actions";

const mapStateToProps = (state, ownProps) => {

  return {
  board: Object.values(state.entities.boards)[0],
  currentUser: state.entities.users[state.session.currentUserId],
  errors: state.errors.pins,
  }
}

const mapDispatchToProps = dispatch => ({
  updateBoard: (board) => dispatch(updateBoard(board)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardEditForm);
