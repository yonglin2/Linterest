import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PinsReducer from './pins_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  pins: PinsReducer
});

export default rootReducer;
