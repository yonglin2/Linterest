import { connect } from 'react-redux';

import { clearPin } from '../../actions/pin_actions';
import PinModal from './pin_modal';

const mapDispatchToProps = dispatch => ({
  clearPin: () => dispatch(clearPin())
});

export default connect(
  null,
  mapDispatchToProps
)(PinModal);
