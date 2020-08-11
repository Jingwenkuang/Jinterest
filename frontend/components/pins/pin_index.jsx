import React from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';


class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllPins().then(); //iterate pin, filter pin userid 
    //remind pin set state 
  }

  render() { //based on state
   
    const { pins, user, currentUserId } = this.props;
   
    const pinIndexItems = pins.map(pin => (
      <PinIndexItem
        pin = {pin}
        key = {pin.id}
        userId={currentUserId}
        user={user}
      />
    ))
    return (
    <div className="space">
      <div className="pin-index container">
        <div className="pin-index" id="grid-container">
          <div className="pin-index masonry" id="grid">
            {pinIndexItems}
          </div>
        </div>
      </div>
    </div>
    );
  };
};

export default PinIndex;