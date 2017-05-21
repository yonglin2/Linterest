import React from 'react';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    let {currentUser} = this.props;
    return(
      <main>

        <nav className="nav-bar">
          <div className="left-nav">
            <Link to="/">
              <i className="fa fa-pinterest nav-logo" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="mid-nav">
            <h2 className="nav-greeting">
              Hi, {currentUser.id}{currentUser.username}!
            </h2>
          </div>
          <div className="right-nav">
            <Link to="/">
              <i className="fa fa-compass" aria-hidden="true"></i>
            </Link>
            <Link to="/">
              <i className="fa fa-user" aria-hidden="true"></i>
            </Link>
            <i className="fa fa-sign-out"
              aria-hidden="true" onClick={this.props.logout}>
            </i>
          </div>
        </nav>
        <button className="nav-create-button fa fa-plus"
          aria-hidden="true">
        </button>
      </main>
    );
  }
}

export default Nav;
