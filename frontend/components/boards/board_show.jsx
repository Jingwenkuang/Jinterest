import React from 'react';
import PinIndexContainer from '../pins/pin_index_container';


class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.filterPins = this.filterPins.bind(this);
  }

  componentDidMount() {
    // this.props.fetchBoards()
    // this.props.fetchBoard(this.props.match.id)
    // this.props.fetchUser(this.props.currentUser.id)
    this.props.fetchBoard(this.props.boardId)
    // this.props.fetchAllPins()
  }

  filterPins() {
    const { okb, pins} = this.props
    return pins.filter(pin => pin.boardId === okb.id)
  }

  render() {
    let selectPins = this.filterPins(); 
    const pinIndex = selectPins.map(pin => {
      return <PinIndexContainer key={pin.id} pin={pin.photoUrl} pinId={pin.id} />
    })

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

