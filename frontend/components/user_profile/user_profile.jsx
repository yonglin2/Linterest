import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import FollowContainer from '../follows/follow_container';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render() {
    let { user, pins, boards, followers, followings } = this.props;
    return (
      <section className="user-profile-container">
        <div className="user-profile-top">
          <span className="user-description">{user.description}</span>
          <img className="user-profile-pic" src={user.image_url} alt="user-profile-pic"></img>
          <div><button className="user fa fa-pencil"></button></div>
          <FollowContainer></FollowContainer>
        </div>

        <div className="user-profile-bottom">
          <NavLink exact to={`/users/${user.id}`} className="user-profile-link">
            {boards.length} Boards
          </NavLink>
          <NavLink to={`/users/${user.id}/pins`} className="user-profile-link">
            {pins.length} Pins
          </NavLink>
          <NavLink exact to={`/users/${user.id}/followers`} className="user-profile-link">
            {followers.length} Followers
          </NavLink>
          <NavLink exact to={`/users/${user.id}/followings`} className="user-profile-link">
            {followings.length} Following
          </NavLink>
        </div>
      </section>
    );
  }
}

export default UserProfile;
