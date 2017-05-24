import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

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
    let { user, ownPins, boards } = this.props;
    return (
      <div className="user-profile-container">
        <button>
          <i className="fa fa-pencil"></i>
        </button>
        <img className="user-profile-pic" src={user.image_url} alt="user-profile-pic"></img>
        <p>{user.description}</p>
        <div>
          <NavLink to={`/users/${user.id}/pins`}>
            <button>
              {ownPins.length} pins
            </button>
          </NavLink>
          <br></br>
          <NavLink exact to={`/users/${user.id}`}>
            <button>
              {boards.length} boards
            </button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default UserProfile;
