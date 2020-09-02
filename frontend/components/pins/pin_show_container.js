import { connect } from 'react-redux';
import { withRouter } from "react-router";
import PinShow from './pin_show';
import { clearErrors } from '../../actions/session_actions';
import { fetchPin, updatePin, deletePin } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  let id =
    ownProps.location.pathname.split("/").pop();

  return {
    pinId: id,
    pin: state.entities.pins[id],
    // pin: state.entities.pins[ownProps.match.params.pinId],
    pins: state.entities.pins,
    users: state.entities.users,
    currentUserId: state.session.currentUserId,
    currentUser: state.entities.users[state.session.currentUserId],
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  clearErrors: () => dispatch(clearErrors()),
  updatePin: (pin) => dispatch(updatePin(pin)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinShow));