import { connect } from 'react-redux';
import { selectUserData } from '../../reducers/selectors';
import { fetchBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = (state) => ({
  board: state.board,
  pins: selectUserData(state.board.pins)
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
