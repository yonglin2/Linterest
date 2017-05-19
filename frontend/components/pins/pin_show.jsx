import React from 'react';
import { withRouter } from 'react-router';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePin(this.props.id);
  }

  render() {
    let { pinDetail } = this.props;

    return (
      <section className='pin_show_container'>
        <h2 className='pin_show_title'>{pinDetail.name}</h2>
        <img className="pin-show-img" src={pinDetail.image_url} alt={pinDetail.name}></img>
        <p className='pin_show_description'>{pinDetail.description}</p>
      </section>
    );
  }
}

export default PinShow;
