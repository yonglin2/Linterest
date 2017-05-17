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
      return <Link to="/signup">Sign up</Link>;
    } else {
      return <Link to="/login">Login</Link>;
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
            <div className="session-button-container">
              <span className="session-errors">{this.renderErrors()}</span>
              <button className="session-button" onClick={this.handleGuestSubmit}>Demo</button>
              <input className="session-button" type="submit" value={this.capitalize(this.props.formType)} />
            </div>
              {this.navLink()}
            </div>
          </form>
        </div>
        <footer>KEVIN BURG AND JAMIE BECK</footer>
      </section>
    );
  }
}

export default withRouter(SessionForm);
