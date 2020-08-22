import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardEditForm from './board_edit_form';
import { clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchBoard, fetchBoards, updateBoard, deleteBoard } from '../../actions/board_actions';
import { fetchAllPins } from "../../actions/pin_actions";

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.location.pathname.split('/').pop();

  return {
  board: state.entities.boards[id],
  currentUser: state.entities.users[state.session.currentUserId],
  errors: state.errors.pins,
  }
}

const mapDispatchToProps = dispatch => ({
  updateBoard: (board) => dispatch(updateBoard(board)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
  // openModal: modal => dispatch(openModal(modal)),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardEditForm));
