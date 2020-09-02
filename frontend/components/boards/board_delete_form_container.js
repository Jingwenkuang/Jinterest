import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardDeleteForm from "./board_delete_form";

import { deleteBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  let id =
    ownProps.location.pathname.split("/").pop();
  id = Number(id) ? id : state.ui.modal.modalId

  return {
  boardId: id,
  board: state.entities.boards[id],
  // currentUser: state.entities.users[state.session.currentUserId],
  // errors: state.errors.pins,
  }
};

const mapDispatchToProps = (dispatch) => ({
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
  openEditBoard: (boardId) => dispatch(openModal("edit-board", boardId)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardDeleteForm));
