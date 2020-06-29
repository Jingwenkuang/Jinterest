import { connect } from 'react-redux';
import PinCreateFrom from './pin_create_form';
import { createPin } from '../../actions/pin_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
  errors: state.errors.pins,

})

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(PinCreateFrom);