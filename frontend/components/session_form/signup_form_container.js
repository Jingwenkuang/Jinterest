import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { openModal, closeModal, toggleSessionModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateUser: (user) => dispatch(updateUser(user)),
  signup: (user) => dispatch(signup(user)).then(ownProps.closeModal),
  clearErrors: () => dispatch(clearErrors()),
  toggleSessionModal: () => dispatch(toggleSessionModal()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
