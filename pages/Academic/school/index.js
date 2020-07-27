import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';
import CryptoJS from 'crypto-js';
class UploadIndex extends Component {
  state = {
    selectedFile: null,
    hashValue: '',
    newSchool: '',
    errorMessage: '',
    loading: false
  };

  onFileChange = event => {
    this.setState({
      selectedFile: event.target.files[0],
      errorMessage: ''
    });

    const curFile = event.target.files[0];
    const reader = new FileReader();
    var that = this;
    reader.readAsText(curFile);
    reader.onload = function (e) {
      //console.log('file:', e.target.result);
      let jsonData = JSON.parse(this.result);
      //console.log(jsonData);

      // hash json
      let reader = new FileReader();
      reader.readAsArrayBuffer(curFile);
      reader.onload = function (e) {
        var wordArray = CryptoJS.lib.WordArray.create(reader.result);
        var hash = CryptoJS.SHA256(wordArray).toString();
        //this.state.hashValue = hash;
        that.setState({ hashValue: hash });
        console.log(that.state.hashValue);
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

  onClick = async () => {
    this.setState({ loading: true, errorMessage: '' });
    //console.log(this.state.hashValue);
    try {
      const accounts = await web3.eth.getAccounts();
      await verify.methods.upload(this.state.hashValue).send({
        from: accounts[0]
      });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await verify.methods
        .newSchool(this.state.newSchool)
        .send({ from: accounts[0] });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
        <h1>Upload Certificates</h1>
        <Link route="/Academic/school/schoolList">
          <a>
            <Button
              floated="right"
              content='View All Schools'
              primary={true}
              style={{ marginBottom: 20 }}
            />
          </a>
        </Link>
        <Link route="/Academic/school/students">
          <a>
            <Button
              floated="right"
              content='View All Transcripts'
              primary={true}
              style={{ marginBottom: 20 }}
            />
          </a>
        </Link>
        <br />
        <Form error={!!this.state.errorMessage}>
          <h3>Choose a JSON file</h3>
          <input
            type="file"
            onChange={this.onFileChange}
            accept="application/json"
            style={{ marginBottom: 20 }}
          />
          {this.fileData()}
          <a>
            <Button
              onClick={this.onClick}
              loading={this.state.loading}
              content='Upload'
              icon='upload'
              primary={true}
              style={{ marginTop: 10, marginBottom: 20 }}
            />
          </a>
        </Form>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Add new school</h3>
            <Input
              value={this.state.newSchool}
              onChange={event =>
                this.setState({ newSchool: event.target.value })}
            />
          </Form.Field>
          <a>
            <Button
              loading={this.state.loading}
              content='Add'
              icon='add'
              primary={true}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default UploadIndex;