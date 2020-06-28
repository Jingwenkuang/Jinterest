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

    return (
      <div className='pins-container'>
        {
          pins.map(pin => {
            return(
            <PinIndexItem 
              pin = {pin}
              key = {pin.id}
            />
            )
          })
        }
      </div>
    )
  }
}

export default PinIndex;