import React from 'react';
import { Link } from 'react-router-dom';
import values from 'lodash/values';

const BoardsIndexItem = ({ board }) => {
  const boardPins = values(board.pins);
  const emptyBoard = (boardPins.length === 0);
  return (
    <Link to={`/boards/${board.id}`}>
      <li className="board-index-item">
        {emptyBoard ? (
          <h2>empty board</h2>
        ) : (
          <img className="board-index-item-thumbnail" src={boardPins[0].image_url}></img>
        )}
      </li>
      {board.title}
    </Link>
  );
};

export default BoardsIndexItem;
