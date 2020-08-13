// import React, { Component } from 'react';
// import BoardIndexItem from './board_index_item';


// class BoardIndex extends Component {
//   constructor(props) {
//     super(props);
//     this.openEditBoard = this.openEditBoard.bind(this);
//   }

//   componentDidMount() {
//     this.props.fetchBoards();
//     this.props.fetchAllPins();
//     this.props.fetchAllBoardsPins();
//     this.props.fetchUser(this.props.userId)
//   }

  
//   openEditBoard(e, boardId) {
//     e.preventDefault();
//     this.props.openEditBoard(boardId);
//   }
 

//   render() {
//     const { boards, pins, currentUser, user, newBoard } = this.props;
   
//   console.log('check')
//   console.log(pins)
//   console.log(boards)
  
//     const boardIndexItems = (boards.length > 0) ? (
//       boards.map(board => {
//         const prevPinIds = (board.pinIds) ? (
//           board.pinIds.slice(0, 6)
//         ) : (
//             board.pinIds
//           );
     
//           const previewPins = prevPinIds.map((pinId) => {
//             return pins[pinId];
//           });
       
//         return (
//           <BoardIndexItem
//             key={board.id}
//             board={board}
//             pins={previewPins}
//             currentUser={currentUser}
//             user={user}
//             openEditBoard={this.openEditBoard}
//           />
//         )
//       })
//     ) : (
//         null 
//       );

//     return (
//       <div className="board-index">
//         {boardIndexItems}
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//         <div className="board-index-item filler"></div>
//       </div>
//     )
//   }


// }


// export default BoardIndex;

import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.filterBoards = this.filterBoards.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
    this.props.fetchAllPins();
  }

  filterBoards() {

    let userId = this.props.currentUser.id;

    const { boards } = this.props;

    return boards.filter(board => board.user_id === userId);

  }


  render() {

    if (!this.props.boards) {
      return null;
    }
    let userBoards = this.filterBoards();
    const boardIndexItems = userBoards.map(board => {
      return <BoardIndexItem key={board.id} board={board} boardId={board.id} />
    });

    return (
      <div className="boards-index">

        <div className="sub-nav">
          <button className="board-button">Boards</button>
        </div>

        <div className="boards-container">
          <ul className="board-tab">
            {boardIndexItems}
          </ul>
        </div>
      </div>
    )
  }
}

export default BoardIndex;