import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => {
  
  return (
    <div className='pin-index-item'>
      <div className='pin-link'>
        <Link to={`pin/${pin.id}`}>
        <img src={pin.photoUrl} className='pin-index'/>
       </Link>
      </div>

      <div>
        <div className='pin-title'>{pin.title}</div>
      </div>

    </div>
  )
}

export default PinIndexItem;