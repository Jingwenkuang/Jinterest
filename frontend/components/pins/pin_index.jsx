import React from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';


class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllPins(); 
  }

  render() {
    const { pins } = this.props;
    const pinIndexItems = pins.map(pin => (
      <PinIndexItem
        pin = {pin}
        key = {pin.id}
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