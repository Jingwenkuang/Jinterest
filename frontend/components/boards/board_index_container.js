// import React from "react";
// import { connect } from "react-redux";
// import { fetchUser } from "../../actions/user_actions";
// import { fetchBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from "../../actions/board_actions";
// import { fetchAllBoardsPins } from "../../actions/board_pin_actions";
// import { fetchAllPins, updatePin, deletePin } from '../../actions/pin_actions';
// import { openModal, closeModal } from "../../actions/modal_actions";
// import BoardIndex from "./board_index";
// import { clearErrors } from "../../actions/session_actions";

// const mapStateToProps = (state, ownProps) => ({
  
//     currentUser: state.entities.users[state.session.currentUserId],
//     userId: state.session.currentUserId,
//     // boards: ownProps.boards,
//     boards: Object.values(state.entities.boards),
//     boardsPins: state.entities.boardsPins,
//     // pins: state.entities.pins,
//     pins: Object.values(state.entities.pins),
//     // pins: ownProps.pins,
//     user: ownProps.user,
//     errors: state.errors.boards,
// });
 
// const mapDispatchToProps = dispatch => ({
//     fetchUser: userId => dispatch(fetchUser(userId)),
//     fetchBoards: () => dispatch(fetchBoards()),
//     fetchBoard: (boardId) => dispatch(fetchBoard(boardId)),
//     fetchAllPins: () => dispatch(fetchAllPins()),
//     fetchAllBoardsPins: () => dispatch(fetchAllBoardsPins()),
//     clearErrors: () => dispatch(clearErrors()),
//     openModal: modal => dispatch(openModal(modal)),
//     openEditBoard: (boardId) => dispatch(openModal("edit-board", boardId)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);

import { connect } from "react-redux";
import BoardIndex from "./board_index";
import { fetchBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from "../../actions/board_actions";
import { fetchAllPins, updatePin, deletePin } from '../../actions/pin_actions';

const mapStateToProps = (state, ownProps) => ({
  boards: Object.values(state.entities.boards),
  currentUser: state.entities.users[state.session.currentUserId],

});

const mapDispatchToProps = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  fetchAllPins: () => dispatch(fetchAllPins())
  //  createBoard: (board) => dispatch(createBoard(board)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex)