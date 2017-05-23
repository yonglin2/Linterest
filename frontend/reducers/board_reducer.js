import merge  from 'lodash/merge';
import { RECEIVE_BOARD, DELETE_BOARD } from '../actions/board_actions';

const _initialState = {
  id: 0,
  title: "",
  description: "",
  pins: []
};

const BoardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BOARD:
      return merge({}, action.board);
    // not sure if i'll need delete board
    // case DELETE_BOARD:
    //   let newState = merge({}, state);
    //   delete newState[action.board.id];
    //   return newState;
    default:
      return state;
  }
};

export default BoardReducer;
