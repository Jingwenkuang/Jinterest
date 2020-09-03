import React from "react";

class BoardDeleteForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteForever = this.handleDeleteForever.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleDeleteForever(e) {
    e.preventDefault();
    this.props
      .deleteBoard(this.props.boardId)
      .then(this.props.closeModal)
      .then(() => location.reload());
  }

  handleCancel(e, boardId) {
    e.preventDefault();
    this.props.openEditBoard(this.props.boardId);
  }

  render() {
    const { boardId } = this.props;

    return (
      <div className="delete-board-container">
        <form className="delete-board-form">
          <div className="delete-board-header">
            <div className="delete-board-form-title">Are you sure?</div>
          </div>
          <div className="delete-board-body">
            <div className="delete-board-message">
              Once you delete a board and all its Pins, you can't undo it!
            </div>
          </div>
          <div className="delete-board-footer">
            <div className="delete-board-buttons">
              <button
                className="delete-board-cancel-button"
                onClick={(e, boardId) => this.handleCancel(e, boardId)}
              >
                Cancel
              </button>
              <button
                className="delete-board-delete-button"
                onClick={this.handleDeleteForever}
              >
                Delete forever
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BoardDeleteForm;
