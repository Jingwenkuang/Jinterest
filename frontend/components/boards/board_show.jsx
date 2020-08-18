import React from 'react';
import PinIndexContainer from '../pins/pin_index_Container';
import { Link, NavLink } from "react-router-dom";


class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownHidden: true
    }
    this.handleDropDown = this.handleDropDown.bind(this);
    this.filterPins = this.filterPins.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId)
    this.props.fetchAllPins()
    // this.props.clearErrors();
  }

  handleDropDown(e) {
    e.preventDefault();
    this.setState({ dropDownHidden: !this.state.dropDownHidden })
  }

  filterPins() {
    const { selectedBoard, pins } = this.props
console.log(selectedBoard.id)
    return pins.filter(pin => pin.boardId === selectedBoard.id)
  }

  render() {
    const dropDownHidden = this.state.dropDownHidden ? "hidden" : "";
    let selectPins = this.filterPins(); 
    const pinIndex = <PinIndexContainer selectedPins={selectPins}/>

    return (
      <div className="board-show">
        <div className="board-show-icon">
          <div className="create-icon" id="options" onClick={this.handleDropDown}>
            <i className="fa fa-plus"></i>
            <div className={`drop-down ${dropDownHidden}`}>
              <div><Link to="/pin-builder" className="create-pin-tab">Create Pin</Link></div>
              <div onClick={() => this.props.openModal('new-board')}>
                <div className='create-board-tab'>Create Board</div>
              </div>
            </div>
          </div>

          <div className='edit-icon' onClick={() => this.props.openModal('edit-board')}>
            <i className="fa fa-pencil"></i>
          </div>
        </div>
        {/* <div className="board-show-title">
          {this.props.selectedBoard.name}
        </div>
        <div className="board-show-description">
          {this.props.selectedBoard.description}
        </div> */}
        <div className="pin-index">
          <div className="pin-image">
            {pinIndex}
          </div>
        </div>
      </div>

    )
  }
}

export default BoardShow;

