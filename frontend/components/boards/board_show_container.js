import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, fetchBoards } from '../../actions/board_actions';
import { fetchAllPins } from "../../actions/pin_actions";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({

  boardId: ownProps.match.params.boardId, 
  pins: Object.values(state.entities.pins),
  selectedBoard: state.entities.boards[ownProps.match.params.boardId],
  
})


const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  fetchAllPins: () => dispatch(fetchAllPins()),
  fetchBoards: () => dispatch(fetchBoards()),
  openModal: modal => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);