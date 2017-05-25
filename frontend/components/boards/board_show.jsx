import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import PinModal from '../modal/pin_modal';
import BoardEditModal from '../modal/board_edit_modal';

class BoardShow extends React.Component{
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUnpin = this.handleUnpin.bind(this);
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  handleDelete(e){
    e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
    this.props.deleteBoard(this.props.board.id);
  }

  handleUnpin(e){
    e.preventDefault;
    let pinId = parseInt(e.currentTarget.value);
    let boardId = this.props.board.id;
    let pinning = {pin_id: pinId, board_id: boardId};
    this.props.deletePinning(pinning);
  }

  render() {
    let { pins, board, currentUser, user } = this.props;
    let masonryOptions = {
      transitionDuration: 0,
      gutter: 25,
      fitWidth: true
    };
    return (
      <section className="board-show-container">
        <div className="board-show-edit-delete-container">
          {currentUser.id === board.user_id &&
            <button className="board-delete fa fa-trash"
              onClick={this.handleDelete}></button>}
          {currentUser.id === board.user_id &&
            <BoardEditModal></BoardEditModal>}
        </div>
        <h2 className="board-show-title">{board.title}</h2>
        <h4 className="board-show-pin-count">{pins.length} pins</h4>

        <Masonry className={"pins-index-container"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
          {
            pins.map( (pin) => {
              return (
                <div key={`div-${pin.id}`} className="board-pin-container">
                  <button value={pin.id}
                    key={`unpin-${pin.id}`}
                    onClick={this.handleUnpin}
                    className="fa fa-thumb-tack unpin">Unpin</button>
                  <PinModal
                    key={ `pin${pin.id}` }
                    pin={ pin }
                    >
                  </PinModal>
              </div>);
              })
            }
          </Masonry>
      </section>
    );
  }
}

export default withRouter(BoardShow);
