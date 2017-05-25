import { connect } from 'react-redux';

import { requestSinglePin } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import { createPinning } from '../../actions/pinning_actions';
import { selectUserData } from '../../reducers/selectors';
import PinShow from './pin_show';

const mapStateToProps = (state) => ({
  pinDetail: state.pinDetail,
  currentBoards: selectUserData(state.session.currentUser.boards)
});

const mapDispatchToProps = dispatch => ({
  requestSinglePin: (id) => dispatch(requestSinglePin(id)),
  createPinning: (pinning) => dispatch(createPinning(pinning))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
