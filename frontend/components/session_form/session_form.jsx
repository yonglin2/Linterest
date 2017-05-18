import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  handleGuestSubmit(e) {
    e.preventDefault();
    const user = {
      username: "guest",
      password: "password"
    };
    this.props.guestLogin(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up Instead</Link>;
    } else {
      return <Link to="/login">Login Instead</Link>;
    }
  }

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <section className="login-form-container">
        <div className="tint">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
              <i className="fa fa-pinterest" aria-hidden="true"></i>
              <h2 className="login-welcome">Welcome to Linterest</h2>
              <h4 className="login-tagline">Your catalog of ideas</h4>
              <div className="login-input-container">
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
                <input type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                />
              </div>
              <span className="session-errors">
                {this.renderErrors()}
              </span>
            <div className="session-button-container">
              <button className="session-button"
                onClick={this.handleGuestSubmit}>Demo</button>
              <input className="session-button"
                type="submit"
                value={this.capitalize(this.props.formType)}
              />
            </div>
              <span className="navLink">
                { this.navLink() }
              </span>
              <footer className="privacy-footer">
                <a href='#'>Terms of Service and Privacy Policy</a>
              </footer>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default withRouter(SessionForm);
