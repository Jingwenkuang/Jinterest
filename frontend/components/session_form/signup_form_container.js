import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { openModal, closeModal, toggleSessionModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  signup: (user) => dispatch(signup(user)).then(ownProps.closeModal),
  clearErrors: () => dispatch(clearErrors()),
  // otherFrom:(
  //   <button onClick={() => dispatch(openModal('login'))}>
  //     Login
  //   </button>
  // ),
  // closeModal: () => dispatch(closeModal()),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
