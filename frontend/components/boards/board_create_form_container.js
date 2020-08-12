import { connect } from 'react-redux';
import BoardCreateForm from './board_create_form';
import { createBoard } from '../../actions/board_actions';
import { clearErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
  errors
})

const mapDispatchToProps = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardCreateForm);