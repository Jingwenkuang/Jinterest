import React from 'react';
import EditPinForm from './pin_edit_form'

class PinShow extends React.Component{
  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this);
    this.update = this.update.bind(this);
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
      <div>
        <div className='pin-goback' onClick={this.goBack}>
          <i id='show-pin-arrow' className="fas fa-arrow-left"></i>
        </div>

        <div className='pin-show-container'>
          <div className='pin-show-box'>
            <div className='pin-show-photo'>
              <img src={this.props.pin.photoUrl} />
            </div>

            <div className='top-right-edit'>
              <div onClick={()=> this.props.openModal('edit-pin')}><i className={`fas fa-pen ${editPin}`}></i></div>
            </div>

            <div className='pin-show-info'>
              <div className='pin-show-title'>{this.props.pin.title}</div>
              <div className='pin-show-description'>{this.props.pin.description}</div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default EditPinForm;