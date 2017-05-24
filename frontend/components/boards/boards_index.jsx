import React from 'react';
import BoardsIndexItem from './boards_index_item';

class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { boards } = this.props;
    return(
      <div className="boards-index-container">
        <h2>create board button here</h2>
        <ul>
          {boards.map(board => <BoardsIndexItem key={board.id} board={board} />)}
        </ul>
      </div>
    );
  }
}

export default BoardsIndex;
