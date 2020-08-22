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
      dropDownHidden: true,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.update = this.update.bind(this);
    this.deleteImagePreview = this.deleteImagePreview.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleBoardName = this.handleBoardName.bind(this);
    this.makeBoardSelection = this.makeBoardSelection.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleDropDown = this.handleDropDown.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.clearErrors();
    window.addEventListener("click", this.toggleMenu);
  }

  goBack(e) {
    e.stopPropagation();
    this.props.history.goBack();
  }

  handleDropDown(e) {
    e.preventDefault();
    this.setState({ dropDownHidden: !this.state.dropDownHidden })
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

  // handleSelect(e) {
  //   e.preventDefault();
  //   let selected = document.getElementByClassName('show-pin-select')[0];
  //   let boardTitle = e.currentTarget;
  //   selected.innerText = boardTitle.innerText;
  //   let boardId = this.boardFromTitle(boardTitle.innerText).id;
  //   this.setState({boardId: boardId})
  // }

  deleteImagePreview() {
    const previewBackground = document.getElementById('pin-background');
    this.setState({photoUrl: null, photoFile: null})
    previewBackground.style.display = null;
  }

  makeBoardSelection(e) {
    document.getElementById("select-board").innerHTML = e.currentTarget.innerHTML;
    this.toggleMenu(e);
    this.update("chosenBoardId")(e);
  }

  handleBoardName() {
    const { boards } = this.props;
    const dropDownHidden = this.state.dropDownHidden ? "hidden" : "";
    if (!boards) return null;
    return (
      <div className='handle-board-name'>
        <div className='drop-down-menu select-board' id='select-board' >
          <div className='select-board'>Select</div> 
          <div className='drop-down-select-board' onClick={this.handleDropDown}>
            <i className='fa fa-chevron-down board' id='chevron-down' aria-hidden="true"></i>
            <div className='select-box' id='board-names' >
              <ul className={`drop-down-list ${dropDownHidden}`} onClick={e => e.stopPropagation()}>
              <div className='board-list-title'>All boards</div>
                {boards.map((board, idx) => {
                return (
                  <li key={idx}
                  onClick={this.makeBoardSelection}
                  value={board.id}
                  className='board-name'>
                  {board.name}
                  </li>)
              })}
              </ul>
            </div>
          </div>
        </div>
     </div>
    )
  }



  toggleMenu(e) {
    e.stopPropagation();
    let menuList = document.getElementById('select-board');
    let list = document.getElementById("board-names");
    if (!menuList) return null;
    if (e.target === menuList && !list.classList.contains('show-menu')) {
      list.classList.add('show-menu')
    } else {
      list.classList.remove('show-menu')
    }
  }

  render() {
    const { currentUser, boards } = this.props;
    const { title, description, photoUrl } = this.state;
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null ;
    const previewClass = this.state.photoUrl ? "show" : "";

   
    return (
      console.log(this.props.boards),
      <div className="pin-create-container">
          <div className='pin-goback' onClick={this.goBack}>
            <i id='show-pin-arrow' className="fa fa-arrow-left"></i>
          </div>
        <div className="pin-create-box">

          <div className='show-boards-list'>
            <div className='show-boards-box'>
              <div className='show-boards-wrap'>
                <div className='show-board-names'>{this.handleBoardName()}</div>
                <div className='save-to-board'>
                  <button className='pin-save-to-board' id='pin-save' onClick={this.handleSubmit}>
                    Save
                  </button>
                </div>
              </div>
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