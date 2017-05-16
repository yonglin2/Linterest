import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<h1>React is not working</h1>, root);
});

// TODO: remove after testing
import * as APIUtil from './util/session_api_util';

window.signup = APIUtil.signup;
window.login = APIUtil.login;
window.logout = APIUtil.logout;
