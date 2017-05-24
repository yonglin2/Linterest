import React from 'react';
// import PinsIndexItem from './pins_index_item';
import Masonry from 'react-masonry-component';
import PinModal from '../modal/pin_modal';

class UserPins extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    let { userPins } = this.props;
    let masonryOptions = {
      transitionDuration: 0,
      gutter: 25,
      fitWidth: true
    };
    return (
      <div>
        <h2>test</h2>
        <Masonry className={"pins-index-container"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
          {
            userPins.map( (pin) => {
              return (
                <PinModal key={ pin.id }
                  pin={ pin }>
                </PinModal>);
              })
            }
          </Masonry>
      </div>
    );
  }
}

export default UserPins;
