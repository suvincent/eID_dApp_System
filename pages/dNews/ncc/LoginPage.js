import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Router } from '../../../routes';
import Layout from '../../../components/Layout_dNews';
import web3 from '../../../ethereum/web3';
import Newsid from '../../../ethereum/dNews/Certificate'; 

class Login extends Component {
  state = {
    nccAddr: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await Newsid.methods.nccLogin(this.state.nccAddr).send({ from: accounts[0] });


      if (this.state.nccAddr != '0x0000000000000000000000000000000000000000')
            Router.pushRoute(`/dNews/ncc/Certificate/${ this.state.nccAddr.toString() }/Certificate`);
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
            <h3>NCC Entity Address</h3>
            <Input
              placeholder='your entity address (0x...)'
              value={this.state.nccAddr}
              onChange={event =>
                this.setState({ nccAddr: event.target.value })}
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