import React, { Component } from 'react';
import { Button, Form, Message, Input } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';
import CryptoJS from 'crypto-js';
import Entity from '../../../ethereum/academic/build/Entity.json'

class UploadIndex extends Component {
  state = {
    selectedFile: null,
    hashValue: '',
    studentAddr: '',
    studentName: '',
    studentEntity: '',
    studentGraduate: '',
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
      //console.log(jsonData.issuers[0].address);
      that.setState({
        studentAddr: jsonData.data[0].address,
        studentName: jsonData.data[0].name
      });
      console.log("student's address: ", that.state.studentAddr);
    };
    // hash json
    const reader2 = new FileReader();
    reader2.readAsArrayBuffer(curFile);
    reader2.onload = function (e) {
      var wordArray = CryptoJS.lib.WordArray.create(reader2.result);
      var hash = CryptoJS.SHA256(wordArray).toString();
      that.setState({ hashValue: hash });
      console.log("hashing value: ", that.state.hashValue);
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

  onSubmit = async () => {
    this.setState({ loading: true, errorMessage: '' });
    //console.log(this.state.hashValue);
    try {
      const accounts = await web3.eth.getAccounts();

      // in Entity
      const user = await verify.methods.getUserEntity().call();
      const entitySchool = await new web3.eth.Contract(Entity.abi, user);
      await entitySchool.methods
        .newDataToSend(this.state.studentEntity, "diploma")
        .send({ from: accounts[0] });

      const index = await entitySchool.methods
        .recentSendingIndex(this.state.studentEntity)
        .call();

      await entitySchool.methods
        .addDataToSend("IPFS hash", this.state.hashValue, index)
        .send({ from: accounts[0] });

      await entitySchool.methods
        .addDataToSend("isGraduated", this.state.studentGraduate, index)
        .send({ from: accounts[0] });

      await entitySchool.methods
        .approveDataToSend(index)
        .send({ from: accounts[0] });

      // in Verify
      await verify.methods
      .upload(this.state.hashValue, this.state.studentEntity, 
              this.state.studentName, this.state.studentGraduate)
      .send({ from: accounts[0] });

      Router.pushRoute(`/Academic/school/students`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Upload Certificates</h1>
        <Link route="/Academic/school/students">
          <a>
            <Button
              floated="right"
              content='View All Transcripts'
              primary={true}
            />
          </a>
        </Link>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Student Entity Address</h3>
            <Input
              placeholder='the student entity address (0x...)'
              value={this.state.studentEntity}
              onChange={event =>
                this.setState({ studentEntity: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>If Student Graduate or not</h3>
            <Input
              placeholder='yes/no'
              value={this.state.studentGraduate}
              onChange={event =>
                this.setState({ studentGraduate: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Choose a JSON file</h3>
            <input
              type="file"
              onChange={this.onFileChange}
              accept="application/json"
              style={{ marginBottom: 4 }}
            />
            {this.fileData()}
          </Form.Field>
          <a>
            <Button
              loading={this.state.loading}
              content='Upload'
              icon='upload'
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