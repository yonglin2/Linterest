import { connect } from 'react-redux';
import { selectUserBoards } from '../../reducers/selectors';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  boards: state.user.boards,
  ownPins: state.user.own_pins,
});


const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
