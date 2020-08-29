import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardIndex from "./board_index";
import { editBoard, deleteBoard } from "../../actions/board_actions";
import EditBoardFormContainer from './board_edit_form_container';
import { openModal, closeModal } from "../../actions/modal_actions";

const msp = (state, ownProps) => ({
  pins: state.entities.pins
 
})

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    editBoard: (id) => dispatch(openModal('edit-board', id)),
    deleteBoard: (boardId) => dispatch(deleteBoard(boardId)),
    // openEditBoard: (boardId) => dispatch(openModal("edit-board", boardId)),
  };
};


class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.redirect = this.redirect.bind(this);
    this.filterPins = this.filterPins.bind(this)
    this.handleEditBoard = this.handleEditBoard.bind(this)
  }

  handleEditBoard (id) {
    return (e) => {
      this.props.editBoard(id)
    }
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
    let boardId = this.props.board.id
  // console.log('ik')
  // console.log(name)
  // console.log(this.props.board.id)
  // console.log(selectedPins)
    
    let photo;
    // if (selectedPins.length) photo = selectedPins[0].photoUrl
    const photo1 = selectedPins[0] ? (
      <img className="board-index-img-left" src={selectedPins[0].photoUrl} />
    ) : (
      <div className="board-index-img-empty-l"></div>
    );

        const photo2 = selectedPins[1] ? (
          <img
            className="board-index-img-right1"
            src={selectedPins[1].photoUrl}
          />
        ) : (
          <div className="board-index-img-empty-r1"></div>
        );

                const photo3 = selectedPins[2] ? (
                  <img
                    className="board-index-img-right2"
                    src={selectedPins[2].photoUrl}
                  />
                ) : (
                  <div className="board-index-img-empty-r2"></div>
                );

 
    return (
      <div className="board-index">
        <div className="board-container" onClick={this.redirect}>

          <div className="board-index-item-image">
            {photo1}
            <div>
              {photo2}
              {photo3}
            </div>
          </div>
        </div>

        <div className="board-index-item info">
          <div className="board-index-item info-details">
            <div className="board-title">{name}</div>
            <div className="pins-amount">{selectedPins.length} pins</div>
          </div>

          <div
            className="board-index-item edit-icon-pencil show"
            onClick={this.handleEditBoard(boardId)}
          >
            <i className="fa fa-pencil" id="board-edit-icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(msp, mapDispatchToProps)(BoardIndexItem));