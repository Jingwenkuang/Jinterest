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

    if (!grid) return;
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
    const { pin, page, openEditPin, user, userId } = this.props;
    const pinId = this.props.pin.id

   const editPinLink =
    //  page === "profile" && location.hash.includes(user.username) ? (
       <a
         className="pin-index-item edit-pin-link"
         onClick={() => openEditPin(pin.id)}
       >
         <i className="fa fa-pencil edit-pin-icon"></i>
       </a>
    //  ) : null;

    return (
    
      <div id={`${this.state.id}`} className="pin-index-item container">
        <div className='pin-index-main'>
        <div className="pin-index-item masonry-item">
          <Link to={`/pins/${pinId}`} className="pin-index-item pin-show-link">
            <div className="pin-index-item overlay"></div>
            <img src={pin.photoUrl} className='pin-index-item masonry-photo' />
          </Link>

          <div className="pin-index-item links">
            <div className="pin-index-item edit-pin-link-container">{editPinLink}</div>
            {/* <div className="save-board-pin-link-container">{openBoardPinLink}</div>
            <div className="pin-index-item pin-link-container">{pinLink}</div> */}
          </div>

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