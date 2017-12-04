import React from 'react';

class BoardCreateForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      user_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state);
    this.props.closeModal();
  }

  render() {
    return (
      <form className="board-form">
        <label>
          <h2 className="board-form-h2">Title</h2>
          <input type="text"
            placeholder="e.g. Photos"
            onChange={this.update('title')}>
          </input>
        </label>

        <label>
          <h2 className="board-form-h2">Description</h2>
          <input type="text"
            onChange={this.update('description')}></input>
        </label>
        <div></div>
        <input type="submit" onClick={this.handleSubmit}></input>
      </form>
    );
  }
}

export default BoardCreateForm;
