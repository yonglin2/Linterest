import React from 'react';
import { withRouter } from 'react-router-dom';

const Follows = (props) => {
  console.log(props);
  let followList = props.location.pathname.split('/');
  let follows = followList[followList.length - 1] === "followers" ?
  props.followers : props.followings;
  console.log(follows);
  return (
    <div className="follows-container">
      {
        follows.map( (follow) => {
          return (<li>{follow.image_url}{follow.username}</li>);
        })
      }
    </div>
  );
};

export default withRouter(Follows);
