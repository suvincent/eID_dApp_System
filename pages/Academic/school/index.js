import React, { Component } from 'react';
import { Button, Form, Message, Input, Dropdown } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';
import Entity from '../../../ethereum/academic/build/Entity.json'
import DateTime from 'react-datetime';
const ipfsClient = require('ipfs-http-client')

const typeOfCertificate = [
  {
    key: 0,
    text: 'Will Expire',
    value: 0
  },
  {
    key: 1,
    text: 'Will NOT Expire',
    value: 1
  }
]

class UploadIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  constructor (props) {
    super(props)
    this.state = {
      ipfs: ipfsClient("/ip4/127.0.0.1/tcp/5001"),
      IPFShash: '',
      cert_end_date: '10000000000000',
      disable: true,
      studentAddr: '',
      studentName: '',
      studentGraduate: '',
      controlAddr: '',
      errorMessage: '',
      loading: false
    }

    // bind methods
    this.captureFile = this.captureFile.bind(this)
    this.saveToIpfs = this.saveToIpfs.bind(this)
    this.connect = this.connect.bind(this)
  }

  captureFile (event) {
    event.stopPropagation()
    event.preventDefault()
  
    this.saveToIpfs(event.target.files)
  }

  // Add file to IPFS and return a CID
  async saveToIpfs ([ file ]) {
    try {
      const added = await this.state.ipfs.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      this.setState({ IPFShash: added.cid.toString() })
    } catch (err) {
      console.error(err)
    }
  }

  connect () {
    this.setState({
      ipfs: ipfsClient("/ip4/127.0.0.1/tcp/5001")
    })
  }

  handleChange = (e, { value }) => {
    if (value == 0) this.setState({ disable: false });
    else if (value == 1) 
      this.setState({ 
        disable: true,
        cert_end_date: '10000000000000'
      });
  }

  onSubmit = async () => {
    this.setState({ 
      loading: true, 
      errorMessage: ''
    });
    console.log(this.state.IPFShash + "," + this.state.studentGraduate + "," + this.state.cert_end_date);
    try {
      const accounts = await web3.eth.getAccounts();

      // in Entity
      const access = await new web3.eth.Contract(Entity.abi, this.state.controlAddr);
      //const entitySchool = await new web3.eth.Contract(Entity.abi, this.props.address);

      await access.methods
        .newDataMultipleToSend(this.props.address, this.state.studentAddr, "diploma", 
                              "IPFShash,isGraduated,CertificateEndDate",
                              this.state.IPFShash + "," + this.state.studentGraduate + "," + this.state.cert_end_date, true)
        .send({ from: accounts[0] });

      // in Verify
      await verify.methods
      .upload(this.state.hashValue, this.state.studentAddr, 
              this.state.studentName, this.state.studentGraduate)
      .send({ from: accounts[0] });

      Router.pushRoute(`/Academic/school/${this.props.address}/students`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1 style={{ color: "#e60000" }}>！學校模式：上傳學生畢業證明！</h1>
        <h1>Upload Certificates</h1>
        <Link route={`/Academic/school/${this.props.address}/students`}>
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
            <h3>Entity to Control</h3>
            <Input
              placeholder='your entity address (0x...)'
              value={this.state.controlAddr}
              onChange={event =>
                this.setState({ controlAddr: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Student Name</h3>
            <Input
              placeholder='the student name'
              value={this.state.studentName}
              onChange={event =>
                this.setState({ studentName: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Student Entity Address</h3>
            <Input
              placeholder='the student entity address (0x...)'
              value={this.state.studentAddr}
              onChange={event =>
                this.setState({ studentAddr: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Student Graduate or not</h3>
            <Input
              placeholder='Yes/No'
              value={this.state.studentGraduate}
              onChange={event =>
                this.setState({ studentGraduate: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Type of Certificate</h3>
              <Dropdown
                placeholder='Type of Certificate'
                options={typeOfCertificate}
                selection={true}
                onChange={this.handleChange}
              />
          </Form.Field>
          <Form.Field disabled={!!this.state.disable}>
            <h3>Student Cerificate Expired Date (if needed)</h3>
            <DateTime
              value={this.state.cert_start_date} 
              onChange={date => {
                  this.setState({ cert_end_date: date.toDate().getTime().toString() });
              }}>
            </DateTime>
          </Form.Field>
          <Form.Field>
            <h3>Choose the Transcript</h3>
              <input
                type="file"
                onChange={this.captureFile}
                // accept="application/json"
                style={{ marginBottom: 4 }}
              />
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
        <br /><br />
      </Layout>
    );
  }
}

export default UploadIndex;