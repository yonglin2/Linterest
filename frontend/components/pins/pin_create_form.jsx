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
    console.log(pin);
    this.props.createPin(pin);
  }

  render() {
    return (
      <div className="upload-page">
        <Dropzone multiple={false} accept="image/*"
            onDrop={this.handleImageDrop} className="upload-input-right-dropzone">
            {
              this.state.image_url === "" ?
                <div>
                  <h3>Drag and Drop<br/>
                    or </h3>
                  <button>Click Here!</button>
                </div>
                :
                <img src={this.state.image_url} />
            }
        </Dropzone>
        <br></br>
        <form onSubmit={this.handleSubmit} className="upload-input-frame">
          <h1 className="upload-input-left">Name</h1>
          <input type="text" onChange={this.update('name')} value={this.state.name} className="upload-input-right"></input>
          <h1 className="upload-input-left">Description</h1>
          <input type="text" onChange={this.update('description')} value={this.state.description} className="upload-input-right"></input>
          <input type="submit" value="Submit" className="upload-input-right-button"></input>
        </form>

      </div>
    );
  }
}

export default PinCreateForm;
