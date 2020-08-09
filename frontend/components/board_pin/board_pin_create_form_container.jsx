
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardPinCreateForm from "./board_pin_create_form";


import { fetchBoards } from "../../actions/board_actions";
import { createBoardPin } from "../../actions/board_pin_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  const currentUserId = state.session.currentUserId;
  // const pin = state.entities.pins[state.ui.objectId];
  const allBoards = Object.values(state.entities.boards);

  return {
    currentUserId,
    pin,
    allBoards,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  createBoardPin: boardPin => dispatch(createBoardPin(boardPin)),
  closeModal: () => dispatch(closeModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardPinCreateForm));