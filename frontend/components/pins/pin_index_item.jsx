import React from 'react';
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin
  }



  render() {
    const { pin } = this.props;
    return (
      <div className='pin-index-item-container'>
        <section className='pin-index-main'>
        <div className='pin-link'>
          <Link to={`pin/${pin.id}`}>
          <img src={pin.photoUrl} className='pin-index-photo' onLoad={this.showPhoto}/>
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