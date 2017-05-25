import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

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
    case RECEIVE_FOLLOW:
      return merge({}, state, { followed: true } );
    case REMOVE_FOLLOW:
      return merge({}, state, { followed: false } );
    default:
      return state;
  }
};

export default UserReducer;
