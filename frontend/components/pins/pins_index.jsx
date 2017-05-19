import React from 'react';
import PinsIndexItem from './pins_index_item';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPins();
  }

  render() {
    let { pins } = this.props;
    return (
      <section className="pins-index-container">
        <ul className="pins-index">
          {
            pins.map( (pin) => {
              return (
                <PinsIndexItem key={ pin.id }
                               pin ={ pin }>
                </PinsIndexItem>);
            })
          }
        </ul>
      </section>
    );
  }
}

export default PinsIndex;
