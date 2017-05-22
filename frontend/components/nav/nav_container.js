import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { requestAllPins } from '../../actions/pin_actions';

import { randomizeAllPins } from '../../reducers/selectors';
import Nav from './nav';

const mapStateToProps = ({ session, pins }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
