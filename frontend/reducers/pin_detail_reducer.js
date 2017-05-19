import { RECEIVE_SINGLE_PIN } from '../actions/pin_actions';

const _initialState = {
  id: 0,
  name: "",
  description: "",
  image_url: ""
};

const PinDetailReducer = (state = _initialState, action) => {
  switch (action.type) {
    case RECEIVE_SINGLE_PIN:
      return action.pin;
    default:
      return state;
  }
};

export default PinDetailReducer;
