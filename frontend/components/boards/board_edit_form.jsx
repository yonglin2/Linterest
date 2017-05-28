import React from 'react';

class BoardEditForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = this.props.currentBoard;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editBoard(this.state);
    this.props.fetchUser(this.props.currentUser.id);
    this.props.closeModal();
  }

  render() {
    return (
      <form className="board-form">
        <label>
          <h2 className="board-form-h2">Title</h2>
          <input type="text"
            value={this.state.title}
            onChange={this.update('title')}>
          </input>

        </label>
        <label>
          <h2 className="board-form-h2">Description</h2>
          <input type="text"
            value={this.state.description}
            onChange={this.update('description')}></input>
        </label>

        <input type="submit" onClick={this.handleSubmit}></input>
      </form>
    );
  }
}

export default BoardEditForm;
