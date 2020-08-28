import React, { Component } from 'react';
import { Form, Button, Input, Message, Dropdown, Table } from 'semantic-ui-react';
import Layout from '../../../components/EidUserLayout';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';

class Edit extends Component {
  state = {
    loading: false,
    loading_send: false,
    errorMessage: '',
    newKey: '',
    newValue: ''
  };

  onClick = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    const { Header, Row, HeaderCell, Body } = Table;


    return (
      <Layout>
        <h1>Send Data to Registry!</h1>
        <br />
        <Table>
          <Header>
            <Row>
              <HeaderCell>Destination</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Key</HeaderCell>
              <HeaderCell>Value</HeaderCell>
            </Row>
          </Header>
          <Body>
            {/* {this.renderRows()} */}
          </Body>
        </Table>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Input new data</h3>
            <Input
              label={{ basic: true, content: 'key' }}
              value={this.state.newKey}
              onChange={event =>
                this.setState({ newKey: event.target.value })}
            />
            <br /><br />
            <Input
              label={{ basic: true, content: 'value' }}
              value={this.state.newValue}
              onChange={event =>
                this.setState({ newValue: event.target.value })}
            />
          </Form.Field>
          <a>
            <Button
              loading={this.state.loading}
              content='Add'
              icon='add circle'
              primary={true}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
        <br />
        <a>
          <Button
            onClick={this.onClick}
            loading={this.state.loading_send}
            content='Send'
            icon='send'
            primary={true}
          />
        </a>
      </Layout>
    );
  }
}

export default Edit;