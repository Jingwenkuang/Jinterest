import { connect } from 'react-redux';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import { closeModal } from '../../actions/modal_actions';
import PinEditForm from './pin_edit_form';

const mapStateToProps = (state, ownProps) => ({
  // pin: Object.values(state.entities.pins),
  currentUser: state.entities.users[state.session.currentUserId],
  errors: state.errors.pins,
})

const mapDispatchToProps = dispatch => ({
  fetchPin: (pinId) => dispatch(fetchPin(pinId)),
  updatePin: (pin) => dispatch(updatePin(pin)),
  deletePin: (pinId) => dispatch(deletePin(pinId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(PinEditForm);