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
  }

  render() {
    if (!this.props.pins) {
      return null;
    }
    let name = this.props.board.name
    let selectedPins = this.filterPins()
  
    let photo;
    if (selectedPins.length) photo = selectedPins[0].photoUrl
    return (
        <div className='board-index'>
          <div className="board-container" onClick={this.redirect}>
            
            <div className='board-box'>
              <img className="board-cover" src={photo} />
            </div>

            <div className="board-title">{name}</div>
            <div className="pins-amount">{selectedPins.length} pins</div>
            <div className='edit-icon' onClick={() => this.props.openModal('edit-board')}>
              <i className="fa fa-pencil"></i>
            </div>
          </div>
        </div>
    )
  }
}
export default withRouter(connect(msp, mapDispatchToProps)(BoardIndexItem));