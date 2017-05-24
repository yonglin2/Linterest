import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { fetchUser } from '../../actions/user_actions';
import BoardCreateForm from './board_create_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCreateForm);
