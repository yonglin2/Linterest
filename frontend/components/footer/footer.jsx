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
        <div>
          <a href="https://github.com/lynilir/Linterest">
            <button className="fa fa-github"
              aria-hidden="true">
            </button>
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/yong-lin-565a5220">
            <button className="fa fa-linkedin"
              aria-hidden="true">
            </button>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
