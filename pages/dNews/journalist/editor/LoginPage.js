import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Router } from '../../../../routes';
import Layout from '../../../../components/Layout_dNews';
import web3 from '../../../../ethereum/web3';
//import name from '../../../ethereum/dNews/';

class Login extends Component {
  state = {
    jourAddr: '',
    mediaAddr: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      //await verify.methods.jourLogin(this.state.jourAddr).send({ from: accounts[0] });

      if (this.state.jourAddr != '0x0000000000000000000000000000000000000000')
        Router.pushRoute(`/dNews/journalist/editor/${ this.state.jourAddr.toString() }/${ this.state.mediaAddr.toString() }/EditorReq`);

      //Router.pushRoute(`/dNews/journalist/editor/EditorReq`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  }; 

  render() {
    return (
      <Layout>
        <h1>Login your Entity</h1>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Journalist Entity Address</h3>
            <Input
              placeholder='your entity address (0x...)'
              value={this.state.jourAddr}
              onChange={event =>
                this.setState({ jourAddr: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Media Entity Address</h3>
            <Input
              placeholder='your media entity address (0x...)'
              value={this.state.mediaAddr}
              onChange={event =>
                this.setState({ mediaAddr: event.target.value })}
            />
          </Form.Field>
          <a>
            <Button
              loading={this.state.loading}
              content='Login'
              icon='sign in'
              primary={true}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default Login;