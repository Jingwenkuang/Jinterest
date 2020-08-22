import React from 'react';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
   
  }
 
  componentDidMount() {
    this.props.fetchAllPins(); 
  }

  render() { 
    const { pins, user, currentUserId } = this.props;
   
    const pinIndexItems = pins.map((pin, idx) => (
      <PinIndexItem
        // key = {pin.id}
        key={idx}
        pin = {pin}
        userId={currentUserId}
        user={user}
      />
    ))
    return (
      <div className="pin-index container">
        <div className="pin-index" id="grid-container">
          <div className="pin-index masonry" id="grid">
            {pinIndexItems}
          </div>
        </div>
      </div>
    );
  };
};

export default PinIndex;