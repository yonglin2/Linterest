import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, root);
});

// TODO: remove after testing
// import * as APIUtil from './util/session_api_util';
//
// window.signup = APIUtil.signup;
// window.login = APIUtil.login;
// window.logout = APIUtil.logout;

import {signup, login, logout } from './actions/session_actions';

window.signup = signup;
window.login = login;
window.logout = logout;
