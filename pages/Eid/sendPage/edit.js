import React, { Component } from 'react';
import { Form, Button, Input, Message, Dropdown, Table } from 'semantic-ui-react';
import Layout from '../../../components/EidUserLayout';
import Entity from '../../../ethereum/Eid/build/Entity.json';
import web3 from '../../../ethereum/web3';
import { Router, Link } from '../../../routes';

class PendingDataHelper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      {this.props.selfs}
      </>
    );
  }
}

class Edit extends Component {
  state = {
    loading: false,
    loading_send: false,
    errorMessage: '',
    newKey: '',
    newValue: ''
  };

  static async getInitialProps(props) {
    const {address, index} = props.query;
    const entity = new web3.eth.Contract(Entity.abi, address);

    let certainData = [];
    let Data = await entity.methods.pendingDataToSend(index-1).call();
    certainData[0] = index; // index of # 
    certainData[1] = Data[1]; // destination
    certainData[2] = Data[2]; // description
    certainData[3] = Data[3]; // status of approval

    let keys = [];
    let values = [];
    var keyLength = await entity.methods.dataSizeToSend(index-1).call();
    for(let j=0; j<keyLength; j++){
      let object = await entity.methods.keyValueOfDataToSend(index-1, j).call();
      keys[j] = object[0];
      values[j] = object[1];
    }
    certainData[4] = keys; // key[]
    certainData[5] = values; // value[]
    certainData[6] = address;

    return {certainData, entity, address};
  }

  onClick = async (event) => {
    event.preventDefault();
      const entity = new web3.eth.Contract(Entity.abi, this.props.address);
      let single = await entity.methods.isSingle.call();

      this.setState({ loading_send: true, errorMessage: '' });
      try{
        const accounts = await web3.eth.getAccounts();
        if(single)
          await entity.methods.approveDataToSend(this.props.certainData[0] - 1)
          .send({from: accounts[0]});
        else
          await entity.methods.approveMultipleToSend(this.props.certainData[6], this.props.certainData[0] - 1)
          .send({from: accounts[0]});
        
        this.setState({approval: true});
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }

      this.setState({ loading_send: false });
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const entity = new web3.eth.Contract(Entity.abi, this.props.certainData[6]);
    let single = await entity.methods.isSingle.call();
    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      if(single)
        await entity.methods.addDataToSend(this.state.newKey, this.state.newValue, this.props.certainData[0] - 1)
        .send({from: accounts[0]});
      else 
        await entity.methods.addMultipleToSend(this.props.certainData[6], this.state.newKey, this.state.newValue, this.props.certainData[0] - 1)
        .send({from: accounts[0]});
      window.location.reload(false);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  Back = () => {
    Router.pushRoute(`/Eid/sendPage/${this.props.certainData[6]}`);
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;


    return (
      <Layout>
        <a>
          <Button
            onClick={this.Back}
            content='Back'
          />
        </a>
        <h1>Edit Data</h1>
        <br />
        <Table>
          <Header>
            <Row>
              <HeaderCell width="5">Destination</HeaderCell>
              <HeaderCell width="13">Description</HeaderCell>
            </Row>
          </Header>
          <Body>
            <Row>
              <Table.Cell>{this.props.certainData[1]}</Table.Cell>
              <Table.Cell>{this.props.certainData[2]}</Table.Cell>
            </Row>
          </Body>
        </Table>
        <br />
        <Table>
          <Header>
            <Row>
              <HeaderCell width="5">Key</HeaderCell>
              <HeaderCell width="13">Value</HeaderCell>
            </Row>
          </Header>
          <Body>
              <Row>
                <Table.Cell>
                  {this.props.certainData[4].map(self => <Table.Row><PendingDataHelper selfs={self}></PendingDataHelper></Table.Row>)}
                </Table.Cell>
                <Table.Cell>
                  {this.props.certainData[5].map(self => <Table.Row><PendingDataHelper selfs={self}></PendingDataHelper></Table.Row>)}
                </Table.Cell>
              </Row>
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