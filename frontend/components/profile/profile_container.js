import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/user_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    currentUserId: state.session.currentUserId,
    user: state.entities.users[state.session.currentUserId],
    pins: Object.values(state.entities.pins),
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  updateUser: (user) => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearErrors()),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);