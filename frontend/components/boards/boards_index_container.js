import { connect } from 'react-redux';
import { selectUserData } from '../../reducers/selectors';
import { fetchBoard } from '../../actions/board_actions';
import BoardsIndex from './boards_index';

const mapStateToProps = (state) => ({
  boards: selectUserData(state.user.boards)
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndex);
