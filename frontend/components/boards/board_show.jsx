import React from 'react';
import { withRouter } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import PinModal from '../modal/pin_modal';

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
    console.log(e.currentTarget.value);
  }

  render() {
    let { pins, board, currentUser, user } = this.props;
    let masonryOptions = {
      transitionDuration: 0,
      gutter: 25,
      fitWidth: true
    };
    return (
      <section>
        <h2>{board.title}</h2>
        <h4>{pins.length} pins</h4>
          {currentUser.id === user.id &&
            <button onClick={this.handleDelete}>delete this board</button>
          }
        <Masonry className={"pins-index-container"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
          {
            pins.map( (pin) => {
              return (
                <div>
                <button value={pin.id}
                  key={`unpin-${pin.id}`}
                  onClick={this.handleUnpin}>Unpin</button>
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
