import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal } from '../../actions/modal_actions';
const mapStateToProps = state => ({
  errors: state.errors.session,
})

const mapDispatchToProps = (dispatch) => ({
  clearErrors: () => dispatch(clearErrors()),
  login: (user) => dispatch(login(user)),
  // otherForm: (
  //   <button onClick={() => dispatch(openModal('signup'))}>
  //     Signup
  //   </button>
  // ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
