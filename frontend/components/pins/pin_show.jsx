import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin_id: 0,
      board_id: 0
    };

    this.handleChooseBoard = this.handleChooseBoard.bind(this);
  }

  componentDidMount(){
    this.props.requestSinglePin(this.props.id);
  }

  handleChooseBoard(e){
    e.preventDefault();
    this.setState({
      pin_id: this.props.pinDetail.id,
      board_id: parseInt(e.currentTarget.value)}, () => {
        this.props.createPinning(this.state);
      });
  }

  render() {
    let { pinDetail, currentBoards, pinned_boards } = this.props;
    return (
      <section className='pin-show-container'>
        <div className="pinning-dropdown-container">
          <form>
            <select
              onChange={this.handleChooseBoard}>
              <option key="disabled">Choose board</option>
              {currentBoards.map((board) => {
                if (pinned_boards.includes(board.id)) {return;}
                return(<option key={board.id} value={board.id}>{board.title}</option>);
              })}
            </select>
            <button type="Submit">submit</button>
          </form>

        </div>
        <div className="pin-show-header">
          <h2 className='pin-show-title'>{pinDetail.name}</h2>
          <Link to={`/users/${pinDetail.user_id}`} className="pin-show-user-link">
            <img className='pin-show-user-img' src={pinDetail.creator_image_url} alt="creator pic"></img>
          </Link>
        </div>
        <div>
          <img className="pin-show-img" src={pinDetail.image_url} alt={pinDetail.name}></img>
        </div>
        <figcaption className='pin-show-description'>{pinDetail.description}</figcaption>

      </section>
    );
  }
}

export default PinShow;
