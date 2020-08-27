import React, { Component } from 'react';
import { Form, Button, Input, Message, Dropdown, Table } from 'semantic-ui-react';
import Layout from '../../../components/EidUserLayout';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';

class Send extends Component {
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


    return (
      <Layout>
        <h1>Send Data to Registry!</h1>
        <Link route="/Eid/sendPage/edit">
          <a>
            <Button
              floated="right"
              content='Add Value'
              icon='add'
              primary={true}
            />
          </a>
        </Link>
        <br /><br />
        <Table>
          <Header>
            <Row>
              <HeaderCell>Destination</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Key</HeaderCell>
              <HeaderCell>Value</HeaderCell>
              <HeaderCell>Status</HeaderCell>
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

export default Send;