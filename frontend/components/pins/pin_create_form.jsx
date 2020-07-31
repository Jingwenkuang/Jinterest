import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: this.props.currentUser.id, 
      photoUrl: null, 
      photoFile: null,
      errors: this.props.errors,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
    this.deleteImagePreview = this.deleteImagePreview.bind(this);

  }

  update(field){
    return e => {this.setState({[field]: e.currentTarget.value})}
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pin[title]", this,state.title);
    formData.append("pin[description]", this.state.description),
      formData.append("pin[errors]", this.state.errors);
    if(this.state.photoFile) {
      formData.append('pin[photo]', this.state.photoFile);
    }
    this.props.createPin(formData)
      .then((action) => {this.props.history.push(`/pins/${action.pin.id}`)}
      )
  } 

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    const previewBackground = document.getElementById('pin-background');
    reader.onloadend = () => 
      this.setState({ photoUrl: reader.result, photoFile: file})
    
    if (file) {
      reader.readAsDataURL(file);
      previewBackground.style.display = 'none';
    }
  } 

  deleteImagePreview() {
    const previewBackground = document.getElementById('pin-background');
    this.setState({photoUrl: null, photoFile: null})
    previewBackground.style.display = null;
  }
  
  render() {
    const { currentUser } = this.props;
    const { title, description, photoUrl } = this.state;
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null ;
    const previewClass = this.state.photoUrl ? "show" : "";

    return (
      <div className="pin-create-container">
        <div className="pin-create-box">

          <div className="pin-create-content">

              <div className='pin-create-dash'>
                <div className="create-pin-image" id='create-pin-image'>
                  <div className="pin-image-context" id='pin-image-context'>
                    
                      <div className='pin-upload' id='imagePreview'>
                        <label htmlFor="pin-image-upload">
                          <div id='pin-background'>
                            <i className="fa fa-arrow-circle-up" aria-hidden="true" id="pin-upload-arrow"></i>
                              <div className='pin-upload-text'>Click to upload</div>
                          </div>
                            <div className={`pin-image ${previewClass}`} id='upload-pin-photo'>{preview}</div>
                          
                        </label>
                          <input type="file" id="pin-image-upload" className="image-upload" onChange={this.handleFile} />
                      </div>
                  </div>

                    <div>
                      <div className={`delete-photo ${previewClass}`} onClick={this.deleteImagePreview}>
                        <i className="fa fa-trash-o" aria-hidden="true" id='pin-trash'></i>
                      </div>
                    </div>   
                </div>
              </div>

            <div className="create-pin-category">
              <div className="create-pin-input">
                <div className="pin-info">
                  <div className="pin-title">
                    <input 
                      type="text"
                      value={title} 
                      onChange={this.update("title")}
                      placeholder="Add your title" 
                      />
                  </div>

                  <div className="pin-demo-user">
                    <i className="fa fa-user-o" id="pin-demouser"></i>
                    <p>{currentUser.username}</p>
                  </div>

                  <div className="pin-description">
                    <textarea
                      rows="1"
                      value={description}
                      onChange={this.update("description")}
                      placeholder="Tell everyone what your Pin is about">
                    </textarea>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

}

export default PinCreateForm;