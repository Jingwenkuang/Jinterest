import React from 'react';
import PinIndexContainer from '../pins/pin_index_Container';


class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.filterPins = this.filterPins.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId)
    this.props.fetchAllPins()
  }

  filterPins() {
    const { okb, pins} = this.props

    return pins.filter(pin => pin.boardId === okb.id)
  }

  render() {
    let selectPins = this.filterPins(); 
    const pinIndex = <PinIndexContainer selectedPins={selectPins}/>

    return (
      <div className="board-show">
        <div>
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

