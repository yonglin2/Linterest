import { connect } from 'react-redux';
import { selectAllPins } from '../../reducers/selectors';
import UserPins from './user_pins';

const mapStateToProps = (state) => ({
  userPins: selectAllPins(state.user.pins)
});

export default connect(
  mapStateToProps,
  null
)(UserPins);
