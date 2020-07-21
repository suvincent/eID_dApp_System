import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
const path = require('path');
//const fs = require('fs-extra');

class CertificateIndex extends Component {
  state = { selectedFile: null };

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });

    const curFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(curFile);
    reader.onload = function (e) {
      //console.log('file:', e.target.result);
      let jsonData = JSON.parse(this.result);
      console.log(jsonData);

      // hash json
      let reader = new FileReader();
      reader.readAsArrayBuffer(curFile);
      reader.onload = function () {
        var wordArray = CryptoJS.lib.WordArray.create(reader.result);
        var hash = CryptoJS.SHA256(wordArray).toString();
        console.log(hash);
      };
    };

    // build
    // const buildPath = path.resolve(__dirname, 'build');
    // fs.removeSync(buildPath);

    // const source = fs.readFileSync(jsonData, 'utf8');
    // const output = solc.compile(source, 1).contracts;

    // fs.ensureDirSync(buildPath);

    // //console.log(output);
    // for (let contract in output) {
    //   //console.log(contract);
    //   fs.outputJsonSync(
    //     path.resolve(buildPath, contract.replace(':', '') + '.json'),
    //     output[contract]
    //   );
    // }
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
        <h1>Verify Certificates</h1>
        <Form>
          <h3>Choose a JSON file</h3>
          <input
            type="file"
            onChange={this.onFileChange}
            accept="application/json"
            style={{ marginBottom: 20 }}
          />
          {this.fileData()}
          <Link route="/Academic/certificates/success">
            <a>
              <Button
                content='Verify'
                icon='check circle outline'
                primary={true}
                style={{ marginTop: 20 }}
              />
            </a>
          </Link>

        </Form>
      </Layout>
    );
  }
}

export default CertificateIndex;