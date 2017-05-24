import { connect } from 'react-redux';
import { selectUserData } from '../../reducers/selectors';
import { fetchBoard, createBoard } from '../../actions/board_actions';
import BoardsIndex from './boards_index';

const mapStateToProps = (state) => ({
  boards: selectUserData(state.user.boards),
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id)),
  createBoard: (board) => dispatch(createBoard(board))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndex);
