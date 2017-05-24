import { connect } from 'react-redux';

import { requestSinglePin } from '../../actions/pin_actions';
import { fetchUser } from '../../actions/user_actions';
import PinShow from './pin_show';

const mapStateToProps = (state) => ({
  pinDetail: state.pinDetail
});

const mapDispatchToProps = dispatch => ({
  requestSinglePin: (id) => dispatch(requestSinglePin(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinShow);
