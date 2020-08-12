import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value }, this.toggleButtonLock());
    }
  }

  toggleButtonLock() {
    const { name } = this.state;
    const saveBtn = document.getElementById("save-board");
    if (!saveBtn) return;
    if (name === '') { //lock button
      saveBtn.disabled = true;
      saveBtn.classList.add("no-button");
    } else { //unlock
      saveBtn.disabled = false;
      saveBtn.classList.remove("no-button");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { createBoard, closeModal} = this.props;
    const { name } = this.state;
    let newBoard = { name };
    closeBoardForm();
    createBoard(newBoard)
  }

  render() {
    const { closeModal } = this.props;
    const { name } = this.state;
    return (
      <div className="board-create-container" onClick={closeModal}>
        <div className="board-create-box" onClick={e => e.stopPropagation()}>
          <div className="board-form-box">
            <h1 className='board-create-text'>Create board</h1>
            <div className="board-edit">
              <div className='board-create-name'>
                <p className='create-name'>Name</p>
                <input type="text"
                  placeholder={"Like \"Places to Go\" or \"Recipes to Make\""}
                  value={name}
                  onChange={this.update("name")}
                  className='board-update-name' />
              </div>
              <div className="date-options">
                <div className='board-create-date'>
                  <p className='create-date'>Dates .Optional-this can help you plan!</p>
                </div>
                <div className="start-end-date">
                  <div className='start'>
                    <label className='start-date'>Start</label>
                    <input type="date" placeholder="Start date" className='create-input-start'/>
                    </div>
                 
                  <div className='end'>
                    <label className='end-date'>End</label>
                    <input type="date" placeholder="End date" className='create-input-end'/> 
                  </div>
                </div>
              </div>
              <div>
                <p className='board-create-opt'>Visibility (optional)</p>
                <div className="checkbox">
                  <input type="checkbox"></input>
                  <label>Keep this board secret</label>
                </div>
              </div>
            </div>
            <div className="bottom-options">
              <div className="save-or-cancel">
                <button className="create-cancle" onClick={closeModal}>Cancel</button>
                <button id="save-board" className="create-save" onClick={this.handleSubmit}>Create</button>
                {this.toggleButtonLock()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(BoardCreateForm);