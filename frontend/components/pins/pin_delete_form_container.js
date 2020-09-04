import React from "react";
import { connect } from "react-redux";
import PinDeleteForm from "./pin_delete_form";

import { deletePin } from "../../actions/pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {

  return ({
    pinId: state.ui.modal.modalId,
  })
};

const mapDispatchToProps = dispatch => ({
  deletePin: (pinId) => dispatch(deletePin(pinId)),
  openEditPin: (pinId) => dispatch(openModal('edit-pin', pinId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(PinDeleteForm);