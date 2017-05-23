import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    console.log(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render() {
    let { user, ownPins, boards } = this.props;
    console.log(this.props);
    return (
      <div className="user-profile-container">
        <h2>This is profile page of {user.username}</h2>
        <img className="user-profile-pic" src={user.image_url} alt="user-profile-pic"></img>
        <p>{user.description}</p>
        <div>
          <Link to={`${user.id}/pins`}>
            <button>
              {ownPins.length} pins
            </button>
          </Link>
          <br></br>
          <Link to={`${user.id}/boards`}>
            <button>
              {boards.length} boards
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default UserProfile;
