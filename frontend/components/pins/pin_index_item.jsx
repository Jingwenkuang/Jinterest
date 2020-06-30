import React from 'react';
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin
    // this.resizeGridItem = this.resizeGridItem.bind(this);
  }

  render() {
    const { pin } = this.props;
    return (
      <div className='pin-index-item-container'>
        <div className='pin-link'>
          <Link to={`pin/${pin.id}`}>
          <img src={pin.photoUrl} className='pin-index-photo'/>
        </Link>
        </div>

        <div>
          <div className='pin-index-title'>{pin.title}</div>
        </div>

      </div>
    )
  }
}

export default PinIndexItem;