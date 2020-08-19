import { connect } from 'react-redux';
import PinCreateFrom from './pin_create_form';
import { createPin } from '../../actions/pin_actions';
import { clearErrors } from '../../actions/session_actions';
import { fetchBoards } from '../../actions/board_actions';

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
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(PinCreateFrom);