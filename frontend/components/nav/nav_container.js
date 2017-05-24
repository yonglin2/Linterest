import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { requestAllPins } from '../../actions/pin_actions';
import Nav from './nav';

const mapStateToProps = ({ session, pins }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestAllPins: () => dispatch(requestAllPins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
