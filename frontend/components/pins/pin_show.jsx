import React from 'react';
import EditPinForm from './pin_edit_form';
import PinIndex from './pin_index';

class PinShow extends React.Component{
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this);
    // this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId);
  }

  goBack(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  render() {

    return(
      <div className='pin-show-outside-container'>
        <div className='pin-goback' onClick={this.goBack}>
          <i id='show-pin-arrow' className="fa fa-arrow-left"></i>
        </div>

        <div className='pin-show-container'>
          <div className='pin-show-box-left'>
            <div className='pin-show-photo'>
              <img src={this.props.pin.photoUrl} className='pin-show-item-photo'/>
            </div>
          </div>

            {/* <div className='top-right-edit'>
              <div onClick={()=> this.props.openModal('edit-pin')}><i className={`fas fa-pen ${editPin}`}></i></div>
            </div> */}

            <div className='pin-show-box-right'>
                <div className='pin-show-title'>{this.props.pin.title}</div>
              
                <div className='pin-show-user'>
                  <i className="fa fa-user-o" id="user-icon" aria-hidden="true"></i>
                  <p className='pin-show-username'>{this.props.users[this.props.currentUserId].username}</p>
                </div>
            
                <footer className='pin-show-footer'>
                  <div className='pin-show-description'>{this.props.pin.description}</div>
               </footer>
              </div>
         
          

        </div>
      </div>
    )
  }
}

export default PinShow;