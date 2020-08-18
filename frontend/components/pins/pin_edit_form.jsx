import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinEditForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.pin.id,
      title: this.props.title,
      description: this.props.pin.description,
      user_id: this.props.pin.user_id
    } 

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePin(this.state);
  }

  handleDelete(e) {
    this.props.deletePin(this.state.id)
      .then(() => this.props.closeModal())
  }

  render() {

    return(
      
      <div className='pin-editform-container'>
        <div className='pin-editform-box'>
          <header className='editform-header'>
            <h1>Edit this Pin</h1>
          </header>

          <form className='editform'>
            <div className='edit-pin-title'>
              <label htmlFor='title'>Title
              <input 
                type="text"
                placeholder='Edit your title'
                value={this.state.title}
                onChange={this.update('title')}
              />
              </label>
            </div>

            <div className='edit-pin-description'>
              <label htmlFor="description">Description
                <textarea 
                  className='pin-edit-description'
                  placeholder='Edit the description'
                  value={this.state.description}
                  onChange={this.update('description')}
                />  
              </label>

            </div>
          </form>

          <div className='pin-edit-photo'>
            <img src={this.props.pin.photoUrl}/>
          </div>

          <div className='pin-edit-footer'>
              <div className='pin-delete-button'>
                  <button className='pin-delete' onClick={this.handleDelete}>Delete</button>
              </div>

              <div className='save-cancel-button'>
                  <button className='edit-cancel' onClick={this.props.closeModal}>Cancel</button>
                  <button className='edit-save' onClick={this.handleSubmit}>Save</button>
              </div>
          </div>

        </div>
      </div>
    )
  }

}

export default PinEditForm;