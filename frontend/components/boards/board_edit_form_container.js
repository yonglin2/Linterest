import { connect } from 'react-redux';
import { editBoard } from '../../actions/board_actions';
import { fetchUser } from '../../actions/user_actions';
import BoardEditForm from './board_edit_form';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  currentBoard: state.board
});

const mapDispatchToProps = dispatch => ({
  editBoard: (board) => dispatch(editBoard(board)),
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardEditForm);
