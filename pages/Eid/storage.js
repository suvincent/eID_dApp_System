import React, { Component } from 'react';
import { Form, Button, Input, Message, Dropdown, Table } from 'semantic-ui-react';
import Layout from '../../components/EidUserLayout';
import createEntity from '../../ethereum/Eid/createEntity';
import validation from '../../ethereum/Eid/validation';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class Storage extends Component {
  state = {
    loading: false,
    errorMessage: ''
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
    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 },
    ]

    return (
      <Layout>
        <h1>View Data from Registry!</h1>
          <br />
          <Dropdown
            placeholder='Address'
            options={options}
            selection={true}
          />
          <Dropdown
            placeholder='Description'
            options={options}
            selection={true}
          />
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