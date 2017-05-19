import React from 'react';
// import PinsIndexItem from './pins_index_item';
import Masonry from 'react-masonry-component';
import PinModal from '../modal/pin_modal';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPins();
  }

  render() {
    let { pins } = this.props;
    let masonryOptions = {
      transitionDuration: 0,
      gutter: 15,
      fitWidth: true
    };
    
    return (
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

    );
  }
}

export default PinsIndex;
