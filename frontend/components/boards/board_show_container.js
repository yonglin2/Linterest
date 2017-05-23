import { connect } from 'react-redux';

import { fetchBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = (state) => ({
  board: state.board
});

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardShow);
