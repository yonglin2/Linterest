import { connect } from 'react-redux';

import { createPin } from '../../actions/pin_actions';
import PinCreateForm from './footer';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createPin: (pin) => dispatch(createPin(pin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinCreateForm);
