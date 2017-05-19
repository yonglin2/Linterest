import React from 'react';

const PinsIndexItem = ({ pin }) => {
  return (
    <li className="pins-index-item">
      <img src={pin.image_url} alt={pin.description}></img>
    </li>
  );
};

export default PinsIndexItem;
