import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PinsReducer from './pins_reducer';
import PinDetailReducer from './pin_detail_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  pins: PinsReducer,
  pinDetail: PinDetailReducer,
  user: UserReducer
});

export default rootReducer;
