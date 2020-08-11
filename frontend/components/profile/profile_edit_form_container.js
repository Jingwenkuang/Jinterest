import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import ProfileEditForm from './profile_edit_form';
import { closeModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.currentUserId],
  errors: state.errors.user
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm);