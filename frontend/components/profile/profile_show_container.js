import { connect } from "react-redux";
import React from "react";

import { fetchAllUsers, fetchUser } from "../../actions/user_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import ProfileShow from "./profile_show";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId],
  users: Object.values(state.entities.users),
  username: ownProps.match.params.username,
  boards: Object.values(state.entities.boards),
  boardsPins: state.entities.boardsPins,
  pins: Object.values(state.entities.pins),
});

const mapDispatchToProps = dispatch => ({
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);