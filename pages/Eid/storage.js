import React, { Component } from 'react';
import { Form, Button, Input, Message, Dropdown, Table } from 'semantic-ui-react';
import Layout from '../../components/EidUserLayout';
import createEntity from '../../ethereum/Eid/createEntity';
import validation from '../../ethereum/Eid/validation';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

const address = [
  { key: 1, text: 'Address 1', value: 1 },
  { key: 2, text: 'Address 2', value: 2 },
  { key: 3, text: 'Address 3', value: 3 },
]
const description = [
  { key: 1, text: 'Description 1', value: 10 },
  { key: 2, text: 'Description 2', value: 20 },
  { key: 3, text: 'Description 3', value: 30 },
]

class Storage extends Component {
  state = {
    loading: false,
    errorMessage: '',
    inputAddress: '',
    inputDescription: '',
    loading_list: false
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

  readAddress = async (event) => {
    event.preventDefault();

    this.setState({ loading_list: true, errorMessage: '' });
    try {

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading_lst: false });
  }

  handleAddress = (e, { value }) => {
    this.setState({ inputAddress: value })
    console.log(JSON.stringify(this.state, null, 2));
  }

  handleDescription = (e, { value }) => {
    this.setState({ inputDescription: value })
    console.log(JSON.stringify(this.state, null, 2));
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>View Data from Registry!</h1>
        <br />
        <Form>
          <Form.Field>
            <Dropdown
              placeholder='Address'
              options={address}
              selection={true}
              loading={this.state.loading_list}
              onChange={this.handleAddress}
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder='Description'
              options={description}
              selection={true}
              loading={this.state.loading_list}
              onChange={this.handleDescription}
            />
          </Form.Field>
        </Form>
        
        <br />
        <a>
          <Button
            loading={this.state.loading}
            content='View Data'
            icon='eye'
            primary={true}
          />
        </a>
        <Table>
          <Header>
            <Row>
              <HeaderCell>Key</HeaderCell>
              <HeaderCell>Value</HeaderCell>
            </Row>
          </Header>
          <Body>
            {/* {this.renderRows()} */}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default Storage;