import { connect } from 'react-redux';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import { withRouter } from 'react-router';
import { openModal, closeModal } from '../../actions/modal_actions';
import PinEditForm from './pin_edit_form';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    let id =
    ownProps.location.pathname.split("/").pop();

  return {
    pin: state.entities.pins[id],
    // pin: state.entities.pins[ownProps.match.params.pin.id],
    currentUser: state.entities.users[state.session.currentUserId],
    errors: state.errors.pins,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPin: (pinId) => dispatch(fetchPin(pinId)),
  updatePin: (pin) => dispatch(updatePin(pin)),
  deletePin: (pinId) => dispatch(deletePin(pinId)),
  openDeletePin: (pinId) => dispatch(openModal("delete-pin", pinId)),
  clearErrors: () => dispatch(clearErrors()),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinEditForm));