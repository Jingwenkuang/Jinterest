import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal, toggleSessionModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  errors: state.errors.session,
  
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearErrors: () => dispatch(clearErrors()),
  login: (user) => dispatch(login(user)).then(ownProps.closeModal),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal('signup'))}>
  //     Signup
  //   </button>
  // ),
  // closeModal: () => dispatch(closeModal()),
  toggleSessionModal: () => dispatch(toggleSessionModal()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
