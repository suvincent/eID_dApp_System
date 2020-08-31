import React, { Component } from 'react';
import { Button, Table, Label, Form, Input } from 'semantic-ui-react';
import Layout from '../../../components/EidUserLayout';
import Entity from '../../../ethereum/Eid/build/Entity.json';
import web3 from '../../../ethereum/web3';
import {CopyToClipboard} from 'react-copy-to-clipboard';
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

class PendingData extends Component {
  //{this.props.joins.map(item => <td>{item}</td>)}
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      approval: props.selfs[3]
    }
  }   


    Send = async () => {
      event.preventDefault();
      const entity = new web3.eth.Contract(Entity.abi, this.props.selfs[6]);
      let single = await entity.methods.isSingle.call();

      this.setState({ loading: true, errorMessage: '' });
      try{
        const accounts = await web3.eth.getAccounts();
        if(single)
          await entity.methods.approveDataToSend(this.props.selfs[0] - 1)
          .send({from: accounts[0]});
        else
          await entity.methods.approveMultipleToSend(this.props.selfs[6], this.props.selfs[0] - 1)
          .send({from: accounts[0]});
        
        this.setState({approval: true});
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }

      this.setState({ loading: false });
    }

    Edit = () => {
      Router.pushRoute(`/Eid/sendPage/${this.props.selfs[6]}/${this.props.selfs[0]}/edit`);
    }

    render(){
      return (
        <>  
          <Table.Cell>{this.props.selfs[0]}</Table.Cell>
          <Table.Cell>
              {this.props.selfs[1].substring(0, 5) + '...'}
              <CopyToClipboard text ={this.props.selfs[0]}>
                <Label as='a' icon='copy' content='copy'></Label>
              </CopyToClipboard>
          </Table.Cell>
          <Table.Cell>{this.props.selfs[2]}</Table.Cell>
          <Table.Cell>
            {this.props.selfs[4].map(self => <Table.Row><PendingDataHelper selfs={self}></PendingDataHelper></Table.Row>)}
          </Table.Cell>
          <Table.Cell>
            {this.props.selfs[5].map(self => <Table.Row><PendingDataHelper selfs={self}></PendingDataHelper></Table.Row>)}
          </Table.Cell>
          <Table.Cell>
              {this.state.approval ? `Done` : 
                <Button onClick={this.Edit} primary>Edit</Button>
              }
          </Table.Cell>
          <Table.Cell>
              {this.state.approval ? `Sent` : 
                <Button onClick={this.Send} loading={this.state.loading} primary>Send</Button>
              }
          </Table.Cell>
          
        </>
      );
    }
}

class Send extends Component {
  state = {
    loading: false,
    address: '',
    description: '',
    errorMessage: ''
  };

  static async getInitialProps(props) {
    const {address} = props.query;
    const entity = new web3.eth.Contract(Entity.abi, address);

    let pendingLength = await entity.methods.pendingDataToSendCount().call();

    var pendingData = [];
    for(let i=0; i<pendingLength; i++){
      let arr = [];
      let Data = await entity.methods.pendingDataToSend(i).call();
      arr[0] = i+1; // index of # 
      arr[1] = Data[1]; // destination
      arr[2] = Data[2]; // description
      arr[3] = Data[3]; // status of approval

      let keys = [];
      let values = [];
      var keyLength = await entity.methods.dataSizeToSend(i).call();
      for(let j=0; j<keyLength; j++){
        let object = await entity.methods.keyValueOfDataToSend(i, j).call();
        keys[j] = object[0];
        values[j] = object[1];
      }
      arr[4] = keys; // key[]
      arr[5] = values; // value[]
      arr[6] = address;

      pendingData[i] = (arr);
    }
    
    return {pendingData, address};
  }

  onSubmit = async (event) => {
    event.preventDefault();
    
    const entity = new web3.eth.Contract(Entity.abi, this.props.address);

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      await entity.methods.newDataToSend(this.state.address, this.state.description)
        .send({ from: accounts[0] });

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
    Router.pushRoute(`/Eid/sendPage/${this.props.address}`);
  };


  render() {
    const { Header, Row, HeaderCell, Body } = Table;


    return (
      <Layout>
        <h1>Send Data to your Registry!</h1>
        <br />
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <h3>Target address</h3>
              <Input
                label={{basic: true, content: 'address'}}
                value={this.state.address}
                onChange={event => this.setState({address: event.target.value})}
              />
              <h3>Description of writing Data (Will be a key of mapping)</h3>
              <Input
                label={{basic: true, content: 'description'}}
                value={this.state.description}
                onChange={event => this.setState({description: event.target.value})}
              />
              <br />
              <br />
              <a>
                <Button 
                  loading={this.state.loading}
                  content='New'
                  icon='add circle'
                  primary={true}
                />
              </a>
            </Form.Field>
          </Form>
        <br />
        <Table>
          <Header>
            <Row>
              <HeaderCell>#</HeaderCell>
              <HeaderCell>Destination</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Key</HeaderCell>
              <HeaderCell>Value</HeaderCell>
              <HeaderCell>Status</HeaderCell>
              <HeaderCell>Send</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.props.pendingData.map(self => <Table.Row><PendingData selfs={self}></PendingData></Table.Row>)}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default Send;