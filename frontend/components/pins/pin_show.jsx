import React from 'react';
import EditPinForm from './pin_edit_form';
import PinIndex from './pin_index';

class PinShow extends React.Component{
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this);
    // this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId);
  }

  goBack(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  render() {
      const {pin} = this.props;
    return (
      console.log(this.props.pins),
      console.log(this.props.pin),
      console.log(this.props.match),
      console.log("yea"),
      (
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
              <div className="top-right-edit">
                <div onClick={() => this.props.openModal("edit-pin")}>
                  <i className="fa fa-pencil" id='edit-pin'></i>
                </div>
              </div>
              <div className="pin-show-title">{this.props.pin.title}</div>

              <div className="pin-show-user">
                <i
                  className="fa fa-user-o"
                  id="user-icon"
                  aria-hidden="true"
                ></i>
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
    );
  }
}

export default PinShow;