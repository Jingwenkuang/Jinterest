import { connect } from 'react-redux';
import { fetchAllPins, updatePin, deletePin } from '../../actions/pin_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PinIndex from './pin_index';

const mapStateToProps = (state, ownProps)  => {
  let pickedPins = Object.values(state.entities.pins);
  if (ownProps.selectedPins) {
    pickedPins = ownProps.selectedPins
  }
  return {  
    pins: pickedPins,
    user: state.entities.users[state.session.currentUserId],
    currentUserId: state.session.currentUserId,
    page: ownProps.page,
  } 
}

const mapDispatchToProps = (dispatch) => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
  updatePin: (pin) => dispatch(updatePin(pin)),
  deletePin: (pinId) => dispatch(deletePin(pinId)),
  openEditPin: (pinId) => dispatch(openModal("edit-pin", pinId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);