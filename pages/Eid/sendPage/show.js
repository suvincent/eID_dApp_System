import React, { Component } from 'react';
import { Button, Table, Label, Form, Input, Checkbox,  } from 'semantic-ui-react';
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
      let addr = this.props.single ? this.props.selfs[6] : this.props.singleAddress;
      const entity = new web3.eth.Contract(Entity.abi, addr);

      this.setState({ loading: true, errorMessage: '' });
      try{
        const accounts = await web3.eth.getAccounts();
        if(this.props.single)
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
              <CopyToClipboard text ={this.props.selfs[1]}>
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
    singleAddress: '',
    description: '',
    errorMessage: '',
    immediateSend: false,
    columnCount: 1,
    keys: [""],
    values: [""]
  };

  static async getInitialProps(props) {
    const {address} = props.query;
    const entity = new web3.eth.Contract(Entity.abi, address);

    let single = await entity.methods.isSingle().call();

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
    
    return {pendingData, address, single};
  }

  toggle = () => this.setState((prevState) => ({ immediateSend: !prevState.immediateSend }))

  addNewColumn = () => {
    event.preventDefault();;
    this.setState(
    (prevState) => ({ 
      columnCount: prevState.columnCount+1,
      keys: [...prevState.keys, ""],
      values: [...prevState.values, ""]
    }))}
  deleteLastColumn = () => {
    event.preventDefault();
    if(this.state.columnCount>0){
      var _keys = [...this.state.keys];
      var _values = [...this.state.values];
      _keys.splice(this.state.columnCount-1, 1);
      _values.splice(this.state.columnCount-1, 1);
      this.setState({keys: _keys})
      this.setState({values: _values})
      this.setState((prevState) => ({columnCount: prevState.columnCount-1}));
    }
  }

  

  onSubmit = async (event) => {
    event.preventDefault();
    
    let addr = this.props.single ? this.props.address : this.state.singleAddress;
    const entity = new web3.eth.Contract(Entity.abi, addr);
    console.log(this.props.single);
    console.log(addr);

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      if(this.props.single)
        await entity.methods.newDataToSend(this.state.address, this.state.description, this.state.keys+"", this.state.values+"", this.state.immediateSend)
          .send({ from: accounts[0] });
      else
        await entity.methods.newDataMultipleToSend(this.props.address, this.state.address, this.state.description, this.state.keys+"", this.state.values+"", this.state.immediateSend)
          .send({from: accounts[0]});

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
          <h1>Send Data to others Registry!</h1>
          {this.props.single ? <></> :
            <>
            <h3>This is a multiple-controlled entity, please enter an entity has access to it.</h3>
            <Input
              label={{ basic: true, content: 'address'}}
              value={this.state.singleAddress}
              onChange={event => this.setState({singleAddress: event.target.value})}
            />
            </>
          }
          <br />
          <br />
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <Form.Group widths="equal">
                  <Input
                    label={{basic: true, content: 'Target address'}}
                    value={this.state.address}
                    onChange={event => this.setState({address: event.target.value})}
                  />
                  <Input
                    label={{basic: true, content: 'Description'}}
                    value={this.state.description}
                    onChange={event => this.setState({description: event.target.value})}
                  />
              </Form.Group>
              <Button 
                content='Add new column'
                onClick={this.addNewColumn}
              />
              <Button
                content='Delete last column'
                onClick={this.deleteLastColumn}
              />
              <br />
              <br />
              {this.state.keys.map((cur, index) =>
                <Form.Group widths="equal">
                <Input 
                  label = {{content: "Key " + index}}
                  value = {this.state.keys[index]}
                  onChange = {event => {{
                    const newKeys = [...this.state.keys];
                    newKeys[index] = event.target.value;
                    this.setState({keys: newKeys})
                  }}}
                />
                <Input 
                  label = {{content: "Value " + index}}
                  value = {this.state.values[index]}
                  onChange = {event => {{
                    const newValues = [...this.state.values];
                    newValues[index] = event.target.value;
                    this.setState({values: newValues})
                  }}}
                />
                </Form.Group>
              )}
              <Checkbox slider label="Send immediately" onChange={this.toggle} />
              <br />
              <br />
              <a>
                <Button 
                  loading={this.state.loading}
                  content='Process'
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
            {this.props.pendingData.map(self => 
              <Table.Row>
                <PendingData 
                selfs={self}
                singleAddress = {this.state.singleAddress} 
                single = {this.props.single} 
                />
              </Table.Row>
            )}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default Send;