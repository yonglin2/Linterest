import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT_USER
} from '../actions/session_actions';

import { RECEIVE_BOARD, DELETE_BOARD } from '../actions/board_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case RECEIVE_BOARD:
      let newState = merge({}, state);
      if (!newState.currentUser.boards) {
        newState.currentUser.boards = {};
      }
      newState.currentUser.boards[action.board.id] = action.board;
      return newState;
    case DELETE_BOARD:
      newState = merge({}, state);
      delete newState.currentUser.boards[action.board.id];
      return newState;
    case LOGOUT_USER:
      return merge({}, nullUser);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
