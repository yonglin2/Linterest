import * as APIUtil from "../util/follow_api_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const createFollow = (follow) => dispatch => {
  return (
    APIUtil.createFollow(follow)
    .then( newFollow => dispatch(receiveFollow(newFollow)))
  );
};

export const deleteFollow = (follow) => dispatch => {
  return (
    APIUtil.deleteFollow(follow)
    .then(removedFollow => dispatch(removeFollow(removedFollow)))
  );
};
