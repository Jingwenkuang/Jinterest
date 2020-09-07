import React from 'react';
import EditPinForm from './pin_edit_form';
import { withRouter } from 'react-router-dom';
import PinIndex from './pin_index';

class PinShow extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      pinId: this.props.pinId,
      edit: false,
      boardId: null,
      confirm: false,
      boardList: false
    }

    this.goBack = this.goBack.bind(this);
    this.handleEditForm = this.handleEditForm.bind(this);
    this.openToEdit = this.openToEdit.bind(this);
    this.handleSaveToBoard = this.handleSaveToBoard.bind(this);
    this.boardList = this.boardList.bind(this);


    this.hideBoardList = this.hideBoardList.bind(this);
    this.toggleBoardList = this.toggleBoardList.bind(this);
    this.selectBoard = this.selectBoard.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId);
    this.props.fetchBoards();
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.match.params.pinId !== this.props.match.params.pinId) {
    this.props.fetchPin(this.props.match.params.pinId);
    }
  }

  goBack(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  hideBoardList(e) {
    this.setState({ boardList: false });
  }

  toggleBoardList() {
    this.setState({ boardList: !this.state.boardList });
  }

  selectBoard(e) {
    this.setState({ boardId: e.currentTarget.value, boardList: false });
  }

  handleSaveToBoard(e) {
    e.preventDefault();
    let boardPin ={ 
      board_id: parseInt(this.state.boardId),
      pin_id: parseInt(this.props.pinId)
    }
    this.props.createBoardPin(boardPin);
    this.setState({boardId: null, confirm: true})
      // .then(() => window.history.go(-1));
    // const createBoardPin = (boardPin) => this.props.createBoardPin(boardPin);
    // const boardId = this.state.boardId;
    // const pinId = this.state.pinId;
    // e.preventDefault();
    // this.setState({boardId: e.currentTarget.value},
    //   () => createBoardPin({
    //     "boardId": boardId,
    //     "pinId": pinId
    //   })
    //     .then(this.props.closeModal));
    }

  handleEditForm(e) {
    e.preventDefault();
    e.stopPropagation();
    let status = this.state.edit;
    this.setState({ edit: !status });
    this.props.openModal("edit-pin")
  }

  openToEdit() {
    const { pin, pinId, currentUserId } = this.props;
    if (pin.user_id === currentUserId) {
      return (
        <div onClick={this.handleEditForm}>
          <i className="fa fa-pencil" id='edit-pin'></i>
        </div>
      )
    }
  }

  boardList() {
    if (!boards) return null;
    return(
      <div className='pin-board-list'> 
        <div className='board-list-dropdown' id="select-board">
          Select board 
        </div>
        <div className='board-list' id='board-names'>
          <ul className='dropdown-menu' onClick={e => e.stopPropagation()}>
            {boards.map((board, idx) => {
              console.log(board)
              return (
                <li 
                  key={idx}
                  className='board-name'
                  value={board.id}
                  onClick={this.selectBoard}
                  >
                  {board.name}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='dropdown-arrow'>
          <i className="fa fa-chevron-down"></i>
        </div>
      </div>

    )
  }


  render() {
    const { currentUser, boards } = this.props;

    const toggleBoardMenu = (this.state.boardList) ? 'show' : 'hide';

    const dropdownLabel = (this.state.boardId === null) ? (
      "Select"
    ) : (
        boards.find(board => board.id === this.state.boardId).name
      );
    const clickSave = (this.state.boardId === null) ? (
      null
    ) : (
        this.handleSaveToBoard
      );

    const boardListItems = (boards.length > 0) ? (
      boards.map((board, idx) => {
        const firstPinImage = (board.firstPin !== undefined) ? (
          <img src={`${board.firstPin.photoUrl}`}
            className="board-li pin-photo" />
        ) : (
            <div className="board-li pin-photo"></div>
          );
        const secret = (board.secret) ? 'show ish' : 'hide';
        return (
          <li
            key={idx}
            className="create-pin board-list-item"
            value={board.id}
            onClick={this.selectBoard}
          >
            <div className="create-pin board-li content">
              <div className="board-li pin-photo-frame">
                {firstPinImage}
                <div></div>
              </div>
              <div className="board-li title">{board.name}</div>
              <div className={`board-li secret-icon-container ${secret}`}>
                <i className="fa fa-lock board-li secret-icon"></i>
              </div>
            </div>
          </li>
        )
      }
      )
    ) : (
        null
      );

    const { pin } = this.props;
    if (pin === undefined) {
      return null;
    }
    return (
    
        <div className="pin-show-outside-container" onClick={this.goBack}>
  
          <div className="pin-goback" onClick={this.goBack}>
            <i id="show-pin-arrow" className="fa fa-arrow-left"></i>
          </div>
          
          <div
            className="pin-show-container"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pin-show-box-left">
              <div className="pin-show-photo">
                <img
                  src={pin.photoUrl}
                  className="pin-show-item-photo"
                />
              </div>
            </div>

        
            <div className="pin-show-box-right">
    
              <div className="pin-show-header" onClick={e => e.stopPropagation()}>
              <div className="top-right-edit">
                {this.openToEdit()}
              </div>
                <div
                  className="create-pin"
                  id="buttons"
                  onClick={this.toggleBoardList}
                  onBlur={this.hideBoardList}
                >
                <div className="create-pin" id="select-board-dropdown">
                  <div className="create-pin" id="select-board-label">
                    <div className="create-pin" id="selected-board">
                      {dropdownLabel}
                    </div>
                  </div>
                  <div className="create-pin" id="dropdown-icon-container">
                    <i className="fa fa-chevron-down" id="dropdown-icon"></i>
                  </div>
                </div>
                <div className="create-pin" id="save-button" onClick={clickSave}>
                  <div className="create-pin" id="save-button-label">
                    Save
                  </div>
                </div>
                <div className={`create-pin board-list container ${toggleBoardMenu}`}>

                  <div className="create-pin board-list header">
                    <div className="create-pin board-list title">
                      All boards
                    </div>
                  </div>
                  <ul className="create-pin board-list">
                    {boardListItems}
                  </ul>
                </div>
              </div>
            </div>

           
              <div className="pin-show-title">{this.props.pin.title}</div>

              <div className="pin-show-user">
                <img src={this.props.currentUser.profileUrl} className='currentUser-icon' />
                <p className="pin-show-username">
                  {this.props.users[this.props.currentUserId].username}
                </p>
              </div>

              <footer className="pin-show-footer">
                <div className="pin-show-description">
                  {this.props.pin.description}
                </div>
              </footer>
            </div>
          </div>
        </div>
      )
  
  }
}

export default withRouter(PinShow);