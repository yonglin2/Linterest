import merge from 'lodash/merge';
import { RECEIVE_SINGLE_PIN, CLEAR_PIN } from '../actions/pin_actions';
import { LOGOUT_USER } from '../actions/session_actions';

const _initialState = {
  id: 0,
  creator_image_url: "",
  name: "",
  description: "",
  image_url: ""
};

const PinDetailReducer = (state = _initialState, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_PIN:
      return action.pin;
    case LOGOUT_USER:
      return merge(state, _initialState);
    case CLEAR_PIN:
      let newState = _initialState;
      return newState;
    default:
      return state;
  }
};

export default PinDetailReducer;
