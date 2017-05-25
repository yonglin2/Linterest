import * as APIUtil from '../util/pinning_api_util';

// export const RECEIVE_PINNING = "RECEIVE_PINNING";
//
// export const receivePinning = (pinning) => ({
//   type: RECEIVE_PINNING,
//   pinning
// });

import { receiveSinglePin } from './pin_actions';

export const createPinning = (pinning) => (dispatch) => {
  return APIUtil.createPinning(pinning)
  .then(newPin => dispatch(receiveSinglePin(newPin)));
};
