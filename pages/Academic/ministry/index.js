import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';
import Entity from '../../../ethereum/academic/build/Entity.json'

class AddIndex extends Component {
  state = {
    selectedFile: null,
    newSchoolAddr: '',
    newSchoolName: '',
    errorMessage: '',
    controlAddr: '',
    loading: false
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();

      // in Entity
      const access = await new web3.eth.Contract(Entity.abi, this.state.controlAddr);
      //const entityMinistry = new web3.eth.Contract(Entity.abi, this.props.address);

      await access.methods
        .newDataMultipleToSend(this.props.address, this.state.newSchoolAddr, "schoolCertificate", "isSchool", "Yes", true)
        .send({ from: accounts[0] });

      // in Verify
      await verify.methods
        .addNewSchool(this.state.newSchoolAddr, this.state.newSchoolName)
        .send({ from: accounts[0] });

      Router.pushRoute(`/Academic/ministry/${this.props.address}/schoolList`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1 style={{ color: "#e60000" }}>！教育部模式：加入新學校！</h1>
        <h1>Add new school</h1>
        <Link route={`/Academic/ministry/${this.props.address}/schoolList`}>
          <a>
            <Button
              floated="right"
              content='View All Schools'
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
            <h3>School Entity Address</h3>
            <Input
              placeholder='the school entity address (0x...)'
              value={this.state.newSchoolAddr}
              onChange={event =>
                this.setState({ newSchoolAddr: event.target.value })}
            />
          </Form.Field>
          
          <Form.Field>
            <h3>School Name</h3>
            <Input
              placeholder='the school name'
              value={this.state.newSchoolName}
              onChange={event =>
                this.setState({ newSchoolName: event.target.value })}
              style={{ marginBottom: 10 }}
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

export default AddIndex;