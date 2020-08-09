import React, { Component } from 'react';
import BoardIndexItem from './board_index_item';


class BoardIndex extends Component {
  constructor(props) {
    super(props);
    this.openEditBoard = this.openEditBoard.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchUser(this.props.userId)
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.userId !== this.props.userId) {
  //     this.props.fetchUser(this.props.match.params.userId)
  //   }

  //   if (Object.values(prevProps.boards).length !== Object.values(this.props.boards).length) {
  //     this.props.fetchBoards();
  //   }
  // }


  // render() {
  //   const { user, allBoards } = this.props;

  //   if (!user) return <div></div>;
  //   if (!allBoards) return <div></div>;

  //   let userBoardsArray = Object.values(allBoards).filter(board => {
  //     return board.creator_id === user.id
  //   })

  //   const userBoards = userBoardsArray.map((board, idx) => {
  //     return <BoardIndexItem key={idx} board={board} />
  //   })

  //   return (
  //     <div className='profile-container'>

  //       <div className="profile-edit-header-bar"></div>

  //       <div className='profile-create-header'>
  //         <div className="profile-create-pin-board-dropdown">
  //           <button className='profile-create-pin-board-btn'><i className="fas fa-plus"></i></button>
  //           <div className='profile-create-pin-board-content'>
  //             <div onClick={() => this.props.openModal('create-board')}>Create Board</div>
  //             <Link to='/pin-builder'><div>Create Pin</div></Link>
  //           </div>
  //           <div className='profile-create-hover'></div>
  //         </div>
  //       </div>

  //       <div className='profile-info-header'>
  //         <div className='profile-info-name'>{user.email.slice(0, user.email.indexOf('@'))}</div>
  //         {/* <div className='profile-follow-container'>
  //           <div># followers</div>
  //           <div>/</div>
  //           <div># following</div>
  //         </div> */}
  //       </div>

  //       <div className='profile-boards-pins-header'>
  //         {/* <Link to='/users/3'>user3</Link> */}
  //         <Link to={`/${this.props.user.username}/boards`}><button className="profile-button-boards">Boards</button></Link>
  //         <Link to={`/users/${user.id}/pins`}><button className="profile-button-pins">Pins</button></Link>
  //       </div>

  //       <div className='profile-board-index-container'>
  //         {userBoards}
  //       </div>
  //     </div>
  //   )
  // }

  /////
  openEditBoard(e, boardId) {
    e.preventDefault();
    this.props.openEditBoard(boardId);
  }
 

  render() {
    const { boards, pins, currentUser, user, newBoard } = this.props;
    const boardIndexItems = (boards.length > 0) ? (
      boards.map(board => {
        const prevPinIds = (board.pinIds) ? (
          board.pinIds.slice(0, 6)
          ) : (
            board.pinIds
            );
            const previewPins = prevPinIds.map((pinId) => {
              return pins[pinId];
            });
       
        return (
          <BoardIndexItem
            key={board.id}
            board={board}
            pins={previewPins}
            currentUser={currentUser}
            user={user}
            // openEditBoard={this.openEditBoard}
          />
        )
      })
    ) : (
        null 
      );

    return (
      <div className="board-index">
        {boardIndexItems}
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
        <div className="board-index-item filler"></div>
      </div>
    )
  }
}


export default BoardIndex;