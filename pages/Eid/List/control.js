import React, { Component } from 'react';
import { Form, Button, Input, Message, Dropdown } from 'semantic-ui-react';
import Layout from '../../../components/EidLayout';
import createEntity from '../../../ethereum/Eid/createEntity';
import validation from '../../../ethereum/Eid/validation';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';

class Entity extends Component {
  state = {
    stringToWrite: '',
    destEntity: ''
  };

  onSubmit = async (event) => {
    event.preventDefault();

    let { stringToWrite, destEntity } = this.state;
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      const infoAccount = await createEntity.methods.initialEOAtoAccount(accounts[0])
        .call();
      const controlContract = validation(infoAccount.validation);

      await controlContract.methods.writeToRegistryByEntity(destEntity, stringToWrite)
        .send({
          from: accounts[0],
          gas: '4000000'
        });

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Write Data to some entity!</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
          <Form.Field>
            <label>Data</label>
            <Input
              label={{ basic: true, content: 'string' }}
              labelPosition='right'
              placeholder=''
              value={this.state.stringToWrite}
              onChange={event => this.setState({ stringToWrite: event.target.value })}
            />
            <label>Receiver Entity</label>
            <Input
              label={{ basic: true, content: 'address' }}
              labelPosition='right'
              placeholder='enter valid address 0x....'
              value={this.state.destEntity}
              onChange={event => this.setState({ destEntity: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Send!</Button>
        </Form>
      </Layout>
    );
  }
}

export default Entity;