import React from "react";
import { Link, NavLink } from "react-router-dom";

class BoardShowNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { selectedBoard } = this.props;

    return (
      <div className='board-show-nave-containter'>
        <div className='board-show-buttons'>
          <Link to="/pin-builder" 
                className='board-show-icon'>
                <i className="fa fa-map-pin board-show icon"></i>
          </Link>

          <button
            className="board-show-icon"
            onClick={(e, boardId) => openEditBoard(e, board.id)}
          >
            <i className="fas fa-pencil-alt board-show icon" id="edit-board-icon"></i>
          </button>
        </div>
        <div className="board-show-title">
          {this.props.selectedBoard.name}
        </div>
      </div>
    )
  }
}

export default BoardShowNavBar;