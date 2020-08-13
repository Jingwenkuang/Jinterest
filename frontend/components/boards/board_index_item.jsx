// import React from "react";
// import { Link, withRouter } from "react-router-dom";


// const BoardIndexItem = ({ board, pins, currentUser, user, openEditBoard }) => {
//   const numPins = board.pinIds.length;

//   const pinA = (pins[0]) ? <img src={`${pins[0].photo}`}></img> : null;
//   const pinB = (pins[1]) ? <img src={`${pins[1].photo}`}></img> : null;
//   const pinC = (pins[2]) ? <img src={`${pins[2].photo}`}></img> : null;
//   const pinD = (pins[3]) ? <img src={`${pins[3].photo}`}></img> : null;
//   const pinE = (pins[4]) ? <img src={`${pins[4].photo}`}></img> : null;
//   const pinF = (pins[5]) ? <img src={`${pins[5].photo}`}></img> : null;

 
//   const name = (currentUser.username === user.username) ? 'show' : 'hide';

//   return (
//     <div className="board-index-item container">
//       <Link
//         to={{
//           pathname: `/${user.username}/${board.name}`,
//           state: {
//             fromProfile: true
//           }
//         }}
//         className="board-index-item link"
//       >
//         <div className="board-index-item content">
//           <div className="board-index-item hover-overlay"></div>
//           <div>
//             <div className="board-index-item pins-container">
//               <div className="board-index-item pins">
//                 <div className="board-index-item pin" id="a">{pinA}</div>
//                 <div className="board-index-item pin" id="b">{pinB}</div>
//                 <div className="board-index-item pin" id="c">{pinC}</div>
//                 <div className="board-index-item pin" id="d">{pinD}</div>
//                 <div className="board-index-item pin" id="e">{pinE}</div>
//                 <div className="board-index-item pin" id="f">{pinF}</div>
//               </div>
//             </div>
//             <div className="board-index-item info">
//               <div className="board-index-item info-details">
//                 <div className="board-index-item title">
//                   {board.name}
//                 </div>
          
//                   <div className="board-index-item pin-count">
//                     {numPins} Pins
//                   </div>
              
//               </div>
//               <button
//                 className={`board-index-item edit-button ${name}`}
//                 onClick={(e, boardId) => openEditBoard(e, board.id)}
//               >
//                 <i className="fas fa-pencil-alt board-index-item" id="edit-icon"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </div>
//   );
// };

// export default withRouter(BoardIndexItem);

import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardIndex from "./board_index";
import { editBoard, deleteBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import EditBoardFormContainer from './board_edit_form_container';


const msp = (state, ownProps) => ({
  pins: state.entities.pins
 
})

const mapDispatchToProps = dispatch => {
  return {
    editBoard: (id) => dispatch(openModal("editBoard", { id })),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  }
};


class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.filterPins = this.filterPins.bind(this)
  }

  redirect() {
    this.props.history.push(`/boards/${this.props.board.id}`)
  }

  filterPins() {
    let boardId = this.props.boardId;
    let pins = Object.values(this.props.pins);
   
    return pins.filter(pin => pin.boardId === boardId);
console.log(pins)
  }

  render() {
    if (!this.props.pins) {
      return null;
    }
    let name = this.props.board.name
    let cover = this.filterPins()
    // console.log(cover)
    let photo;
    if (cover.length) photo = cover[0].photoUrl
    return (
      <>
        <div className='board-index'>
          <div className="board-container" onClick={this.redirect}>
            
            <div className='board-box'>
              <img className="board-cover" src={photo} />
            </div>

            <div className="board-title">{name}</div>
            <div className="pins-amount">{cover.length} pins</div>
          </div>
        </div>
      </>
    )
  }
}
export default withRouter(connect(msp, mapDispatchToProps)(BoardIndexItem));