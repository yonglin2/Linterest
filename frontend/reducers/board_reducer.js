import merge  from 'lodash/merge';
import { RECEIVE_BOARD, DELETE_BOARD } from '../actions/board_actions';
import { LOGOUT_USER } from '../actions/session_actions';
const _initialState = {
  id: 0,
  title: "",
  description: "",
  pins: []
};

const BoardReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARD:
      return merge({}, action.board);
    case DELETE_BOARD:
      return _initialState;
    default:
      return state;
  }
};

export default BoardReducer;
