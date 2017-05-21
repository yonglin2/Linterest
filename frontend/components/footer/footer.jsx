import React from 'react';
import PinCreateModal from '../modal/pin_create_modal';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer-main">
        <PinCreateModal />

        <button className="fa fa-github"
          aria-hidden="true">
        </button>

        <button className="fa fa-linkedin"
          aria-hidden="true">
        </button>
      </footer>
    );
  }
}

export default Footer;
