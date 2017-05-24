import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

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
      <section className='pin-show-container'>
        <div className="pin-show-header">
          <h2 className='pin-show-title'>{pinDetail.name}</h2>
          <Link to={`/users/${pinDetail.user_id}`} className="pin-show-user-link">
            <img className='pin-show-user-img' src={pinDetail.creator_image_url} alt="creator pic"></img>
          </Link>
        </div>
        <div className="pin-show-img-container">
          <img className="pin-show-img" src={pinDetail.image_url} alt={pinDetail.name}></img>
          <figcaption className='pin-show-description'>{pinDetail.description}</figcaption>
        </div>
      </section>
    );
  }
}

export default PinShow;
