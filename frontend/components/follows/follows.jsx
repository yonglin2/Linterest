import React from 'react';
import { withRouter } from 'react-router-dom';

const Follows = (props) => {
  let followList = props.location.pathname.split('/');
  let follows = followList[followList.length - 1] === "followers" ?
  props.followers : props.followings;
  return (
    <div className="follows-container">
      {
        follows.map( (follow) => {
          return (<li key={follow.id}>{follow.image_url}{follow.username}{follow.id}</li>);
        })
      }
    </div>
  );
};

export default withRouter(Follows);
