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
      boardId: "",
      errors: this.props.errors,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
    this.deleteImagePreview = this.deleteImagePreview.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  goBack(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  update(field){
    return e => {this.setState({[field]: e.currentTarget.value})}
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pin[title]", this,state.title);
    formData.append("pin[description]", this.state.description);
    formData.append("pin[boardId", this.state.boardId);
    formData.append("pin[errors]", this.state.errors);
    if(this.state.photoFile) {
      formData.append('pin[photo]', this.state.photoFile);
    }
    this.props.createPin(formData)
      .then((action) => {this.props.history.push(`/pins/${action.pin.id}`)},
      (error) => { this.setState({ errors: this.renderErrors()}) }
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

  boardFromTitle(boardTitle) {
    let currentUserBoards = this.props.boards;
    let board = currentUserBoards.filter(board => {
      return (board).title === boardTitle
    })
    return (board[0])[0];
  }

  handleSelect(e) {
    e.preventDefault();
    let selected = document.getElementByClassName('show-pin-select')[0];
    let boardTitle = e.currentTarget;
    selected.innerText = boardTitle.innerText;
    let boardId = this.boardFromTitle(boardTitle.innerText).id;
    this.setState({boardId: boardId})
  }

  deleteImagePreview() {
    const previewBackground = document.getElementById('pin-background');
    this.setState({photoUrl: null, photoFile: null})
    previewBackground.style.display = null;
  }

  renderErrors() {
    let error = []

    if (this.props.errors[0].includes("Image An image is required to create a Pin.")) {
      error.push("An image is required to create a Pin.");
      return error
    }

    if (this.props.errors[0].includes("Title can't be blank")) {
      error.push("Title can't be blank.");
      return error
    }

    if (this.props.errors[0].includes("Board must exist")) {
      error.push("Please select a board.");
      return error
    }
  }

  imageErrors() {
    if (this.state.errors[0] === "An image is required to create a Pin.") {
      return this.state.errors;
    }
  }

  titleErrors() {
    if (this.state.errors[0] === "Title can't be blank.") {
      return this.state.errors;
    }
  }

  boardErrors() {
    if (this.state.errors[0] === "Please select a board.") {
      return this.state.errors;
    }
  }
  
  render() {
    const { currentUser, boards } = this.props;
    const { title, description, photoUrl } = this.state;
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null ;
    const previewClass = this.state.photoUrl ? "show" : "";

    // const boardTitles = boards.map((board, idx) => {
    //   return <div className="show-pin-title" 
    //               onClick={this.handleSelect}
    //               key={Object.values(board)[0].id}
    //           >
    //             {Object.values(board)[0].title}
    //           </div>
    // })
    if (!boards) return null;
    return (
      console.log(this.props.boards),
      <div className="pin-create-container">
          <div className='pin-goback' onClick={this.goBack}>
            <i id='show-pin-arrow' className="fa fa-arrow-left"></i>
          </div>
        <div className="pin-create-box">

          {/* <header className='create-pin-header'>
            <div className='show-pin-board-dropdown'>
              <button className='show-pin-select'>Select</button>
              <i className='fa fa-chevron-down select-arrow'></i>
              <div className='show-pin-select-content'>
                {boardTitles}
              </div>
              <div className='board-error'>
                {this.boardErrors()}
              </div>
              <button className='create-pin-save' onClick={this.handleSubmit}>Save</button>
            </div>
          </header> */}
        <div>
          <div className='drop-down select-board' id='select-board'>
            Select
          </div>
          <div className='select-box' id='board-names-list'>
            <ul className='drop-down-menu' onClick={ e => e.stopPropagation()}>
              {boards.map((board, idx) => {
                return (
                  <li key={ idx }
                      onClick={this.makeBoardSelection}
                      value={board.id}
                      className='board-name'>
                    {board.name}
                  </li>)
              })}
            </ul> 
          </div>
          <div className='drop-down-select-board'>
              <i className='fa fa-chevron-down'></i>
          </div>
        </div>



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
                    <textarea
                      value={title} 
                      onChange={this.update("title")}
                      className='pin-title-update'
                      placeholder="Add your title">
                    </textarea>
                  </div>

                  <div className="pin-demo-user">
                    <i className="fa fa-user-o" id="pin-demouser"></i>
                    <p className="demo-name">{currentUser.username}</p>
                  </div>

                  <div className="pin-description">
                    <textarea
                      rows="1"
                      value={description}
                      onChange={this.update("description")}
                      className='pin-details'
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