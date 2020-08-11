import { connect } from 'react-redux';
import { fetchAllPins, updatePin, deletePin } from '../../actions/pin_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PinIndex from './pin_index';

const mapStateToProps = (state, ownProps)  => ({
  // pins: Object.values(state.entities.pins),
  user: state.entities.users[state.session.currentUserId],
  currentUserId: state.session.currentUserId
})

const mapDispatchToProps = dispatch => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
  updatePin: pin => dispatch(updatePin(pin)), 
  deletePin: pinId => dispatch(deletePin(pinId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);