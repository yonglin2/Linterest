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
          <img className="board-index-item-thumbnail" src={"http://res.cloudinary.com/dbmxr3ior/image/upload/v1495750841/nhzzkr2zveho96szrkok.jpg"}></img>
        ) : (
          <img className="board-index-item-thumbnail" src={boardPins[0].image_url}></img>
        )}
      </li>
      <figcaption className="board-index-item-title">{board.title}</figcaption>
    </Link>
  );
};

export default BoardsIndexItem;
