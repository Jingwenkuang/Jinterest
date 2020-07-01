import React from 'react';
import { Link } from 'react-router-dom';

const masonryEvents = ["load", "resize"]
class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin;
    this.resizeGrid = this.resizeGrid.bind(this);
  }

  resizeGrid() {
    let grid = document.getElementById('grid');
    let item = document.getElementById(this.state.id);

    let rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    let rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    let itemImg = item.querySelector(".masonry-photo");
    let rowSpan = Math.ceil((itemImg.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
  }

  componentDidMount() {
    setTimeout(() => this.resizeGrid(), 1000);
    masonryEvents.forEach((e) => window.addEventListener(e, this.resizeGrid));
  }

  render() {
    const {pin} = this.props
    const pinId = this.props.pin.id

    return (
    
      <div id={`${this.state.id}`} className="pin-index-item container">
        <div className='pin-index-main'>
        <div className="pin-index-item masonry-item">
          <Link to={`/pins/${pinId}`} className="pin-index-item pin-show-link">
            <div className="pin-index-item overlay"></div>
            <img src={pin.photoUrl} className='pin-index-item masonry-photo' />
          </Link>
        </div>
          <div className='pin-index-title'>
            {pin.title}
          </div>
        </div>
      </div>
    )
  }
}

export default PinIndexItem;