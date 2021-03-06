import { connect } from "react-redux";
import BoardIndex from "./board_index";
import { fetchBoards, fetchBoard, createBoard, updateBoard, deleteBoard } from "../../actions/board_actions";
import { fetchAllPins, updatePin, deletePin } from '../../actions/pin_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  boards: Object.values(state.entities.boards),
  currentUser: state.entities.users[state.session.currentUserId],

});

const mapDispatchToProps = (dispatch) => ({
  fetchBoards: () => dispatch(fetchBoards()),
  fetchAllPins: () => dispatch(fetchAllPins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex)