import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard, fetchBoards } from '../../actions/board_actions';
import { fetchAllPins } from "../../actions/pin_actions";
import { fetchUser } from '../../actions/user_actions';




const mapStateToProps = (state, ownProps) => ({



  // boards: Object.values(state.entities.boards),
  // allBoards: state.entities.boards, //boards obj
  boardId: ownProps.match.params.boardId, //21
  pins: Object.values(state.entities.pins),
  // currentUser: state.entities.users[state.session.currentUserId],
  
 

  okb: state.entities.boards[ownProps.match.params.boardId],
  // currentUser: state.entities.users[state.session.currentUserId],
  // okpins: Object.values(state.entities.pins).filter(pin => pin.boardId === okb.id),
})


const mapDispatchToProps = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id)),
  // fetchAllPins: () => dispatch(fetchAllPins()),
  fetchBoards: () => dispatch(fetchBoards()),
  // fetchUser: userId => dispatch(fetchUser(userId))  
});

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);