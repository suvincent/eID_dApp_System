import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/??/web3';
//import name from '../../../ethereum/dNews/';

class Login extends Component {
  state = {
    nccAddr: '',
    errorMessage: '',
    loading: false
  };
/*
  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await verify.methods.nccLogin(this.state.nccAddr).send({ from: accounts[0] });

      Router.pushRoute(`/dNews/ncc/??`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };
*/
  render() {
    return (
      <Layout>
        <h1>Login your Entity</h1>
        <br />
            <h3>Ministry of Education Entity Address</h3>
            <Input
              placeholder='your entity address (0x...)'
              value={this.state.ministryAddr}
              onChange={event =>
                this.setState({ nccAddr: event.target.value })}
            />
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