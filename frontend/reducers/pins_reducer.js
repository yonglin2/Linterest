import merge from 'lodash/merge';
import {
  RECEIVE_ALL_PINS, RECEIVE_SINGLE_PIN
} from '../actions/pin_actions';

import { LOGOUT_USER } from '../actions/session_actions';

let _initialState = {};

const PinsReducer = (state = _initialState, action) => {
  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return action.pins;
    case RECEIVE_SINGLE_PIN:
      return Object.assign({}, state, {[action.pin.id]: action.pin});
    case LOGOUT_USER:
      return merge({}, _initialState);
    default:
      return state;
  }
};

export default PinsReducer;
