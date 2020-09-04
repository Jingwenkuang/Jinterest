import React from "react";

class PinDeleteForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleDelete() {
    console.log(this.props.match)
    this.props
      .deletePin(this.props.pinId)
      .then(this.props.closeModal)
      .then(() => window.history.go(-1))
  }

  handleCancel() {
    this.props.openEditPin(this.props.pinId);
  }

  render() {
    return (
      <div className="delete-pin container">
        <form className="delete-pin form">
          <div className="delete-pin header">
            <div className="delete-pin form-title">Are you sure?</div>
          </div>
          <div className="delete-pin body">
            <div className="delete-pin confirmation-message">
              Once you delete a Pin, you can't undo it!
            </div>
          </div>
          <div className="delete-pin footer">
            <div className="delete-pin buttons">
              <a className="delete-pin link cancel" onClick={this.handleCancel}>
                <div className="delete-pin link-text cancel">Cancel</div>
              </a>
              <a className="delete-pin link delete" onClick={this.handleDelete}>
                <div className="delete-pin link-text delete">Delete Pin</div>
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PinDeleteForm;