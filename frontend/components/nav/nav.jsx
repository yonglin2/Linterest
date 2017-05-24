import React from 'react';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {currentUser} = this.props;
    return(
        <nav className="nav-bar">
          <div className="left-nav">
            <Link to="/">
              <i className="fa fa-pinterest nav-logo" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="mid-nav">
            <h2 className="nav-greeting">
              Hi, {currentUser.username}!
            </h2>
          </div>
          <div className="right-nav">
            <button onClick={this.props.requestAllPins}>
              <i className="fa fa-compass" aria-hidden="true"></i>
            </button>
            <Link to={`/users/${currentUser.id}`}>
              <i className="fa fa-user" aria-hidden="true"></i>
            </Link>
            <i className="fa fa-sign-out"
              aria-hidden="true" onClick={this.props.logout}>
            </i>
          </div>
        </nav>
    );
  }
}

export default Nav;
