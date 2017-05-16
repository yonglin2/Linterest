import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
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
