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
  ReactDOM.render(<Root store={store} />, root);
});

// TODO: remove after testing
import { createBoard, fetchBoard, deleteBoard, updateBoard } from './util/board_api_util';
window.createBoard = createBoard;
window.fetchBoard = fetchBoard;
window.deleteBoard = deleteBoard;
window.updateBoard = updateBoard;

import { createPinning, deletePinning } from './util/pinning_api_util';
window.createPinning = createPinning;
window.deletePinning = deletePinning;
