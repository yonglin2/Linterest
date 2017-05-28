import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { LOGOUT_USER } from '../actions/session_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';

const defaultUser = Object.freeze({
  id: null,
  username: "",
  image_url: null,
  pins: {},
  own_pins: {},
  description: "",
  boards: {},
  followed: false,
  followers: {},
  followings: {}
});

const UserReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, action.user);
    case RECEIVE_BOARD:
      let newState = merge({}, state);
      if (!newState.boards) {
        newState.boards = {};
      }
      newState.boards[action.board.id] = action.board;
      return newState;
    case RECEIVE_FOLLOW:
      newState = merge({}, state, { followed: true } );
      if (!newState.followers) {
        newState.followers = {};
      }
      newState.followers[action.user.id] = action.user;
      return newState;
    case REMOVE_FOLLOW:
      newState = merge({}, state, { followed: false } );
      delete newState.followers[action.follow.follower_id];
      return newState;
    case LOGOUT_USER:
      return merge({}, defaultUser);
    default:
      return state;
  }
};

export default UserReducer;
