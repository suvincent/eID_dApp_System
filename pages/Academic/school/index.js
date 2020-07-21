import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Link } from '../../routes';

class CertificateIndex extends Component {
  state = { selectedFile: null };

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });

    const curFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(curFile);
    reader.onload = function (e) {
      //console.log('file:', e.target.result);
      //let jsonData = JSON.parse(this.result);
      //console.log(jsonData);

      // hash json
      let reader = new FileReader();
      reader.readAsArrayBuffer(curFile);
      reader.onload = function () {
        var wordArray = CryptoJS.lib.WordArray.create(reader.result);
        var hash = CryptoJS.SHA256(wordArray).toString();
        console.log(hash);
      };
    };
  };

  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>
          <p>File Type: {this.state.selectedFile.type}</p>
        </div>
      );
    }
  };

  render() {
    return (
      <Layout>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
        <h1>Upload Certificates</h1>
        <Form>
          <h3>Choose a JSON file</h3>
          <input
            type="file"
            onChange={this.onFileChange}
            accept="application/json"
            style={{ marginBottom: 20 }}
          />
          {this.fileData()}
          {/* <Link route={`/school/${this.props.address}/success`> */}
            <a>
              <Button
                content='Upload'
                icon='upload'
                primary={true}
                style={{ marginTop: 20 }}
              />
            </a>
          {/* </Link> */}
        </Form>
      </Layout>
    );
  }
}

export default CertificateIndex;