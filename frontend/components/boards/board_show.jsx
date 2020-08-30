import React from 'react';
import PinIndexContainer from '../pins/pin_index_container';
import { Link, NavLink } from "react-router-dom";


class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pindropDownHidden: true
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
    this.setState({ pindropDownHidden: !this.state.pindropDownHidden })
  }

  filterPins() {
    const { selectedBoard, pins } = this.props
    return pins.filter(pin => pin.boardId === selectedBoard.id)
  }

  render() {
    let name = this.props.selectedBoard ? this.props.selectedBoard.name : "";
    let description = this.props.selectedBoard ? this.props.selectedBoard.description : "";
    const pindropDownHidden = this.state.pindropDownHidden ? "hidden" : "";
    let selectPins = this.filterPins(); 
    const pinIndex = <PinIndexContainer selectedPins={selectPins} page ='profile'/>

    return (
      <div className="board-show">
        <div className="board-show-icon">
          <div className="create-icon" id="options" onClick={this.handleDropDown}>
            <i className="fa fa-plus"></i>
            <div className={`drop-down-create-pin ${pindropDownHidden}`}>
              <div><Link to="/pin-builder" className="board-create-pin-tab">Create Pin</Link></div>
            </div>
          </div>

          <div className='edit-icon' onClick={() => this.props.openModal('edit-board')}>
            <i className="fa fa-pencil"></i>
          </div>
        </div>
        <div className="board-show-title">
          {name}
        </div>
        <div className="board-show-description">
          {description}
        </div>
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

