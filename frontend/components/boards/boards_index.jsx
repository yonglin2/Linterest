import React from 'react';
import BoardsIndexItem from './boards_index_item';
import BoardCreateModal from '../modal/board_create_modal';

class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { boards, currentUser, user } = this.props;
    return(
      <ul className="boards-index-container">
        {currentUser.id === user.id &&
          <BoardCreateModal createBoard={this.props.createBoard}/>
        }
        {boards.map(board => <BoardsIndexItem key={board.id} board={board} />)}
      </ul>
    );
  }
}

export default BoardsIndex;
