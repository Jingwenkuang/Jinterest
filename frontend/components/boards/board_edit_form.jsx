import React from 'react';


class BoardEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.board.id,
      name: this.props.board.name,
      description: this.props.board.description,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.openDeleteBoard = this.openDeleteBoard.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return (e) => {
      this.setState(
        { [field]: e.currentTarget.value },
        this.toggleButtonLock()
      );
    };
  }


  openDeleteBoard(id) {
    return (e) => {
      this.props.deleteBoard(id);
    };
  }

  toggleButtonLock() {
    const { name } = this.state;
    const saveBtn = document.getElementById("save-board");
    if (!saveBtn) return;
    if (name === "") {
    
      saveBtn.disabled = true;
      saveBtn.classList.add("no-button");
    } else {
    
      saveBtn.disabled = false;
      saveBtn.classList.remove("no-button");
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state).then(this.props.closeModal);
  }

  render() {
    const { closeModal, board } = this.props;

    return (
      <div className="board-edit-container">
        <div className="board-edit-box" >
          <div className="board-form-box">
            <h1 className="board-edit-form">Edit your board</h1>
            <div className="board-edit-content">
              <div className="board-edit-name">
                <p className="create-name">Name</p>
                <input
                  type="text"
                  placeholder="Edit your name"
                  value={this.state.name}
                  onChange={this.update("name")}
                  className="board-update-name"
                />
              </div>
              <div className="board-edit-description">
                <p className="edit-description">Description</p>
                <textarea
                  rows="3"
                  placeholder="Edit your description"
                  value={this.state.description}
                  onChange={this.update("description")}
                  className="board-edit-textarea"
                ></textarea>
              </div>
              <div className="date-options">
                <div className="board-create-date">
                  <p className="create-date">Add dates(optional)</p>
                </div>
                <div className="start-end-date">
                  <div className="start">
                    <label className="start-date">Start</label>
                    <input
                      type="date"
                      placeholder="Start date"
                      className="create-input-start"
                    />
                  </div>

                  <div className="end">
                    <label className="end-date">End</label>
                    <input
                      type="date"
                      placeholder="End date"
                      className="create-input-end"
                    />
                  </div>
                </div>
              </div>
              <div>
                <p className="board-create-opt">Visibility (optional)</p>
                <div className="checkbox">
                  <input type="checkbox"></input>
                  <label>Keep this board secret</label>
                </div>
              </div>
            </div>
            <div className="bottom-options-list">
              <div className="bottom-options-left">
                <button
                  className="bottom-delete"
                  onClick={this.openDeleteBoard(this.props.board.id)}
                >
                  Delete
                </button>
              </div>
              <div className="board-edit-save-or-cancel">
                <button className="create-cancle" onClick={closeModal}>
                  Cancel
                </button>
                <button
                  id="save-board"
                  className="create-save"
                  onClick={this.handleSubmit}
                >
                  Save
                </button>
                {this.toggleButtonLock()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default (BoardEditForm);