import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../../components/EidUserLayout';
import MultipleEntityFactory from '../../../ethereum/Eid/MultipleEntityFactory';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';

class CreateMultipleEntity extends Component {
  state = {
    description: '',
    EOAaddr: ''
  };



  onSubmit = async (event) => {
    event.preventDefault();

    let address=[];
    let { description, EOAaddr } = this.state;
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      address = EOAaddr.replace(" ","").split(",");
      await MultipleEntityFactory.methods.create(description, address)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/Eid/List');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Create a Multiple-controlled Entity</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
          <Form.Field>
            <label>Entity Description</label>
            <Input
              label={{ basic: true, content: 'string' }}
              labelPosition='right'
              placeholder=''
              value={this.state.description}
              onChange={event => this.setState({ description: event.target.value })}
            />
            <label>Entities to control this entity</label>
            <Input
              label={{ basic: true, content: 'address' }}
              labelPosition='right'
              placeholder='Enter valid array of single-controlled entity address 0x...., 0x... , ..., 0x...]'
              value={this.state.EOAaddr}
              onChange={event => this.setState({ EOAaddr: event.target.value })}
            />

          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create!</Button>
        </Form>
      </Layout>
    );
  }
}

export default CreateMultipleEntity;