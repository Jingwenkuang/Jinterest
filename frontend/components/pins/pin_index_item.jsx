import React from 'react';
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin
  }



  render() {
    const {pin} = this.props
    const pinId = this.props.pin.id
    return (
      <div className='pin-index-item-container'>
        <section className='pin-index-main'>
        <div className='pin-link'>
          <Link to={`/pins/${pinId}`} className="pin-index-to-show-pin">
          <img src={pin.photoUrl} className='pin-index-photo'/>
         </Link>
        </div>

        <div>
            <div className='pin-index-title'>{pin.title}</div>
        </div>
        </section>
      </div>
    )
  }
}

export default PinIndexItem;