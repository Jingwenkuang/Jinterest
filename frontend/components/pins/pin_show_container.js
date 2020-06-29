import { connect } from 'react-redux';
import React from 'react';
import PinShow from './pin_show';
import { clearErrors } from '../../actions/session_actions';
import { fetchPin } from '../../util/pin_api_util';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  pin: state.entities.pins[ownProps.match.params.pinId],
  users: state.entities.users,
  currentUserId: state.session.currentUserId,
})

const mapDispatchToProps = (dispatch) => ({
  fetchPin: pinId => dispatch(fetchPin(pinId)),
  clearErrors: () => dispatch(clearErrors()),
  openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);