import React from 'react';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

const UPLOAD_PRESET = "i2x9hmil";
const UPLOAD_URL = "https://api.cloudinary.com/v1_1/dbmxr3ior/image/upload";

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      image_url: "",
      description: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageDrop = this.handleImageDrop.bind(this);
  }

  handleImageDrop(image) {
    this.handleImageUpload(image[0]);
  }

  handleImageUpload(image) {
    let upload = uploadRequest.post(UPLOAD_URL)
                        .field('upload_preset', UPLOAD_PRESET)
                        .field('file', image);

    upload.end((err, response) => {
      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const pin = this.state;
    this.props.createPin(pin);
    this.props.closeModal();
  }

  render() {
    console.log(this.props);
    return (
      <div className="create-form-container">
        <h1>Create a pin!</h1>
        <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.handleImageDrop}
            className="create-form-dropzone">
            {
              this.state.image_url === "" ?
                <div className="dropzone-text-container">
                  <h3>Drag and Drop</h3>
                    <h4>or</h4>
                  <h3>Click Here!</h3>
                </div>
                :
                <img src={this.state.image_url} />
            }
        </Dropzone>
        <form onSubmit={this.handleSubmit} className="create-form">
          <label>
            <h2>Name</h2>
            <input type="text"
              onChange={this.update('name')}
              value={this.state.name}>
            </input>
          </label>

          <label>
            <h2>Description</h2>
            <input type="textarea"
              onChange={this.update('description')}
              value={this.state.description}>
            </input>
          </label>

          <input type="submit"
            value="Submit"
            className="create-form-submit-button"></input>
        </form>

      </div>
    );
  }
}

export default PinCreateForm;
