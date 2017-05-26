import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const Follows = (props) => {
  let followList = props.location.pathname.split('/');
  let follows = followList[followList.length - 1] === "followers" ?
  props.followers : props.followings;
  return (
    <ul className="follows-container">
      {
        follows.map( (follow) => {
          return (
            <Link to={`/users/${follow.id}`}>
              <li className="follows-item" key={follow.id}>
                <img className="follows-thumbnail"
                  src={follow.image_url}
                  alt={follow.username}></img>
                {follow.username}
              </li>
            </Link>
          );
        })
      }
    </ul>
  );
};

export default withRouter(Follows);
