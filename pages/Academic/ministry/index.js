import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';

class AddIndex extends Component {
  state = {
    selectedFile: null,
    newSchoolAddr: '',
    newSchoolName: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await verify.methods
        .addNewSchool(this.state.newSchool)
        .send({ from: accounts[0] });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Add new school</h1>
        <Link route="/Academic/ministry/schoolList">
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
            <h3>School Entity Address</h3>
            <Input
              value={this.state.newSchoolAddr}
              onChange={event =>
                this.setState({ newSchoolAddr: event.target.value })}
            />
          </Form.Field>
          
          <Form.Field>
            <h3>School Name</h3>
            <Input
              value={this.state.newSchoolName}
              onChange={event =>
                this.setState({ newSchoolName: event.target.value })}
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