import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';

class getIndex extends Component {
  state = {
    selectedFile: null,
    studentEntity: '',
    contractAddress: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
    //   await verify.methods
    //     .addNewSchool(this.state.studentEntity, this.state.contractAddress)
    //     .send({ from: accounts[0] });

      Router.pushRoute(`/Academic/ministry/schoolList`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Get IPFS</h1>
        <Link route="/Academic/index">
          <a>
            <Button
              floated="right"
              content='Verify Certificate'
              primary={true}
            />
          </a>
        </Link>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Student Entity Address</h3>
            <Input
              value={this.state.studentEntity}
              onChange={event =>
                this.setState({ studentEntity: event.target.value })}
            />
          </Form.Field>
          
          <Form.Field>
            <h3>Contract Address</h3>
            <Input
              value={this.state.contractAddress}
              onChange={event =>
                this.setState({ contractAddress: event.target.value })}
            />
          </Form.Field>

          <a>
            <Button
              loading={this.state.loading}
              content='Get'
              icon='cloud download'
              primary={true}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default getIndex;