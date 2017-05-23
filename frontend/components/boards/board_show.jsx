import React from 'react';
import { withRouter } from 'react-router';
import Masonry from 'react-masonry-component';
import PinModal from '../modal/pin_modal';

class BoardShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.boardId);
  }

  render() {
    let { pins, board } = this.props;
    let masonryOptions = {
      transitionDuration: 0,
      gutter: 25,
      fitWidth: true
    };
    return (
      <section>
        <h2>{board.title}</h2>
        <h4>{pins.length} pins</h4>
        <Masonry className={"pins-index-container"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
          {
            pins.map( (pin) => {
              return (
                <PinModal key={ pin.id }
                  pin={ pin }>
                </PinModal>);
              })
            }
          </Masonry>
      </section>
    );
  }
}

export default BoardShow;
