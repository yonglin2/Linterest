import React from 'react';
import { Link } from 'react-router-dom';

const BoardsIndexItem = ({ board }) => (
  <li className="board-index-item">
    <Link to={`/boards/${board.id}`}>
      {board.title}
    </Link>
  </li>
);

export default BoardsIndexItem;
