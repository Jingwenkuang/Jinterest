import React from "react";
import { Link } from "react-router-dom";

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = Object.assign({}, this.props.pin, {
      this.state = {
      title: "",
      description: "",
      photoUrl: null,
      errors: this.props.errors,
      photoPreview: null,
      boardId: null,
      boardList: false
    };

    this.hideBoardList = this.hideBoardList.bind(this);
    this.toggleBoardList = this.toggleBoardList.bind(this);
    this.selectBoard = this.selectBoard.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.deleteImage = this.deleteImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
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

  handleSave(e) {
    e.stopPropagation();
    const details = Object.assign({}, this.state);
    delete details["photoPreview"];
    delete details["board"];
    delete details["boardList"];

    const formData = new FormData();
    for (let key in details) {
      formData.append(`pin[${key}]`, details[key])
    };
    const createBoardPin = (boardPin) => this.props.createBoardPin(boardPin);
    const boardId = this.state.boardId;

    return this.props.createPin(formData)
      .then(res => (createBoardPin({
        "board_id": boardId,
        "pin_id": parseInt(Object.keys(res.pin)[0])
      })
      ))
      .then(() => window.history.go(-1));
  }

  uploadImage() {
    document.getElementById("image-upload-input").click();
  }

  deleteImage() {
    this.setState({ photoPreview: null });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photo: file, photoPreview: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  changeInput(field) {
    return (
      e => this.setState({ [field]: e.currentTarget.value })
    );
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
        this.handleSave
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

    const displayImage = (this.state.photoPreview) ? (
      <div className="create-image-uploaded-container">
        <img src={this.state.photoPreview} className="create-pin-photo" />
        <div className="delete-image-button-container">
          <button className="delete-image-button" onClick={this.deleteImage}>
            <div className="trash-icon-container">
              <i className="fa fa-trash create-pin" id="trash-icon"></i>
            </div>
          </button>
        </div>
      </div>
    ) : (
        <div className="create-pin" id="image-upload-container">
          <div className="image-upload-area" onClick={this.uploadImage}>
            <div className="image-upload-area-border">
              <div className="upload-icon-container">
                <i className="fa fa-arrow-circle-up" id="upload-icon"></i>
              </div>
              <div className="create-pin-instruction">
                Click to upload
            </div>
            </div>
            <div className="create-pin-upload-prefer">
              Recommendation: Use high-quality .jpg files less than 2 MB
        </div>
          </div>
          <input
            type="file"
            onChange={this.handleFile}
            className="create-pin"
            id="image-upload-input" />
        </div>
      );

    return (
      <div className="create-pin-background" onClick={this.hideBoardList}>
        <div className="create-pin-container">
          <div className="create-pin-box">
            <div className="create-pin-header"
              onClick={e => e.stopPropagation()}>
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
            <div className="create-pin-content">
              <div className="create-image-container">
                {displayImage}
              </div>
              <div className="create-pin-details-container">
                <div className="create-pin-title-container">
                  <input
                    type="text"
                    className="create-pin-title"
                    placeholder="Add your title"
                    value={this.state.title}
                    onChange={this.changeInput("title")} />
                </div>
                <div className="create-pin-user-container">
                  <div className="create-pin-user-image-frame">
                    <img
                      src={currentUser.profileUrl}
                      alt="profile-icon"
                      className="create-pin-user-image"
                    />
                  </div>
                  <div className="create-pin-username">
                    {currentUser.username}
                  </div>
                </div>
                <div className="create-pin-description-container">
                  <textarea
                    rows="1"
                    className="create-pin-description"
                    placeholder="Tell everyone what your Pin is about"
                    value={this.state.description}
                    onChange={this.changeInput("description")} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PinCreateForm;