import { connect } from 'react-redux';
import PinShow from './pin_show';
import { clearErrors } from '../../actions/session_actions';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  pin: state.entities.pins[ownProps.match.params.pinId],
  users: state.entities.users,
  currentUserId: state.session.currentUserId,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  clearErrors: () => dispatch(clearErrors()),
  updatePin: (pin) => dispatch(updatePin(pin)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);