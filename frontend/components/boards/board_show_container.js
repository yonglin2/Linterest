import { connect } from 'react-redux';
import { selectUserData } from '../../reducers/selectors';
import { fetchBoard, deleteBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = (state) => ({
  board: state.board,
  pins: selectUserData(state.board.pins),
  currentUser: state.session.currentUser,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: (board) => dispatch(fetchBoard(board)),
  deleteBoard: (boardId) => dispatch(deleteBoard(boardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
