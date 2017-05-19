import React from 'react';
import { Link } from 'react-router-dom';

const PinsIndexItem = ({ pin }) => {
  return (
      <li className="pins-index-item">
        <Link to={`/api/pins/${pin.id}`}>
          <img className="pin-img" src={pin.image_url} alt={pin.description}></img>
        </Link>
        
      </li>
  );
};

export default PinsIndexItem;
