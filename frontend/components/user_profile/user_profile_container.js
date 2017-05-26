import { connect } from 'react-redux';
import { selectUserData } from '../../reducers/selectors';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  boards: selectUserData(state.user.boards),
  ownPins: selectUserData(state.user.own_pins),
  pins: selectUserData(state.user.pins),
  followers: selectUserData(state.user.followers),
  followings: selectUserData(state.user.followings)
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
