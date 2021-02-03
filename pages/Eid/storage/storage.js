import React, { Component } from 'react';
import { Form, Button, Input, Tab, Dropdown, Table } from 'semantic-ui-react';
import Layout from '../../../components/EidUserLayout';
import Entity from '../../../ethereum/Eid/build/Entity.json';
import web3 from '../../../ethereum/web3';
import { Router } from '../../../routes';

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

class Storage extends Component {
  state = {
    loading: false,
    errorMessage: '',
    inputAddress: '',
    inputDescription: '',
    loading_list: false,
    address: [],
    description: [],
    keys:[],
    values:[],
    senderSingle: true,
    ownerSingle: true,
    singleEntity: '',
    markup:'',
    ownerMarkup: '',
    senderMarkup: ''
  };

  static async getInitialProps (props) {
    const {address} = props.query;
    const entity = new web3.eth.Contract(Entity.abi ,address);
    let addrLength = await entity.methods.sourceLength().call();
    let ownerSingle = await entity.methods.isSingle().call();
    

    let source = [];
    for(let i=0; i<addrLength; i++){
      let tmp = await entity.methods.dataSource(i).call();
      source[i] = {key:i, text:tmp, value:i};
    }

    console.log(source);

    return {source, address, entity, ownerSingle};
  }



  handleAddress = async (e, { value }) => {
    let src = this.props.source[value].text;

    const senderEntity = new web3.eth.Contract(Entity.abi, src);
    const entity = new web3.eth.Contract(Entity.abi, this.props.address);
    let single = await senderEntity.methods.isSingle().call();
    this.setState({inputAddress: src, senderSingle: single});
    let desLength = await entity.methods.descriptionLength(src).call();

    let des = [];
    for(let i=0; i<desLength; i++){
      let tmp = await entity.methods.descriptionsBySource(src, i).call();
      des[i] = {key:i, text:tmp, value:i};
    }
    this.setState({description: des});
    if(typeof this.state.inputDescription !== "undefined"){
      this.setState({inputDescription: this.state.description[0].text});
      let Keys = await entity.methods.keysOfData(this.state.inputAddress, this.state.inputDescription).call();
      Keys = Keys.split(", ");
      Keys = Keys.slice(1);
      console.log(Keys);

      let Values = [];
      let i;
      for(i=0; i<Keys.length; i++)
        Values[i] = await entity.methods.fetchValue(this.state.inputAddress, this.state.inputDescription, Keys[i]).call();
    
      //TODO: fetch markup data
      let markupOwner = await entity.methods.MarkupsOwner(this.state.inputAddress, this.state.inputDescription).call();
      let markupSender = await entity.methods.MarkupsSender(this.state.inputAddress, this.state.inputDescription).call();

      this.setState({keys:Keys, 
        values: Values, 
        markupSender: markupSender,
        markupOwner: markupOwner
      });

    }

    console.log(this.props.address, this.state.inputAddress, this.state.description);

  }

  handleDescription = async (e, { value }) => {
    const entity = new web3.eth.Contract(Entity.abi, this.props.address);
    this.setState({inputDescription: value.target});
    
    let Keys = await entity.methods.keysOfData(this.state.inputAddress, this.state.description[value].text).call();
    Keys = Keys.split(", ");
    Keys = Keys.slice(1);
    console.log(Keys);

    let Values = [];
    let i;
    for(i=0; i<Keys.length; i++)
      Values[i] = await entity.methods.fetchValue(this.state.inputAddress, this.state.description[value].text, Keys[i]).call();
  
    //TODO: fetch markup data
    let markupOwner = await entity.methods.MarkupsOwner(this.state.inputAddress, this.state.description[value].text).call();
    let markupSender = await entity.methods.MarkupsSender(this.state.inputAddress, this.state.description[value].text).call();

    this.setState({keys:Keys, 
      values: Values, 
      inputDescription: this.state.description[value].text, 
      markupSender: markupSender,
      markupOwner: markupOwner
    });

  }

  handleOwner = async () => {
    let entity;

    try{
      this.setState({loading: true});
      const accounts = await web3.eth.getAccounts();
      if(this.state.ownerSingle){
        entity = new web3.eth.Contract(Entity.abi, this.props.address);
        await entity.methods.markupSelf(this.state.inputAddress, this.state.inputDescription, this.state.markup)
        .send({from: accounts[0]});
      }
      else{
        entity = new web3.eth.Contract(Entity.abi, this.state.singleEntity);
        await entity.methods.markupMultiple(this.props.address, this.props.address, this.state.inputAddress, this.state.inputDescription, this.state.markup, true)
        .send({from: accounts[0]});

      }
      window.location.reload(false);
      this.setState({loading: false});
    } catch (err) {
      //this.setState({ errorMessage: err.message });
    }

  }

  handleSender = async () => {
    let entity;

    try{
      this.setState({loading: true});
      const accounts = await web3.eth.getAccounts();
      if(this.state.senderSingle){
        entity = new web3.eth.Contract(Entity.abi, this.state.inputAddress);
        await entity.methods.markup(this.props.address, this.state.inputDescription, this.state.markup)
        .send({from: accounts[0]});

      }
      else{
        entity = new web3.eth.Contract(Entity.abi, this.state.singleEntity);
        await entity.methods.markupMultiple(this.state.inputAddress, this.props.address, this.props.address, this.state.inputDescription, this.state.markup, false)
        .send({from: accounts[0]});

      }
      window.location.reload(false);
      this.setState({loading: false});
    } catch (err) {
      //this.setState({ errorMessage: err.message });
    }

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
              options={this.props.source}
              selection={true}
              loading={this.state.loading_list}
              onChange={this.handleAddress}
            />
          </Form.Field>
          <Form.Field>
            <Dropdown
              placeholder='Description'
              options={this.state.description}
              selection={true}
              loading={this.state.loading_list}
              onChange={this.handleDescription}
              onClick={this.state.description!=="" && this.state.address!=="" ? undefined: this.handleDescription}
            />
          </Form.Field>
        </Form>
        <Table celled>
          <Header>
            <Row>
              <HeaderCell>Key</HeaderCell>
              <HeaderCell>Value</HeaderCell>
            </Row>
          </Header>
          <Body>
            <Row>
              <Table.Cell>
                {this.state.keys.map(self => <Table.Row><PendingDataHelper selfs={self}></PendingDataHelper></Table.Row>)}
              </Table.Cell>
              <Table.Cell>
                {this.state.values.map(self => <Table.Row><PendingDataHelper selfs={self}></PendingDataHelper></Table.Row>)}  
              </Table.Cell>
            </Row>
          </Body>
        </Table>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <HeaderCell colSpan='2'>
                Markups
              </HeaderCell>
            </Table.Row>
            <Table.Row>
              <HeaderCell>Source</HeaderCell>
              <HeaderCell>Content</HeaderCell>
            </Table.Row>
          </Table.Header>
          <Body>
            <Row>
              <Table.Cell>
                Owner
              </Table.Cell>
              <Table.Cell>
                {this.state.markupOwner}
              </Table.Cell>
            </Row>
            <Row>
              <Table.Cell>
                Sender
              </Table.Cell>
              <Table.Cell>
                {this.state.markupSender}
              </Table.Cell>
            </Row>
          </Body>
        </Table>
        <Tab 
          menu={{ fluid: true, vertical: true, tabular: true }} 
          panes={
            [
              {
                menuItem: 'Owner',
                render:()=>
                  <Tab.Pane key='tab1'>
                    <Form>
                      {this.props.ownerSingle ? <></> :
                        <Form.Field>
                          <label>Entity has access to Multiple Entity</label>
                          <Input placeholder="Single Entity Address" onChange={(e)=>{this.setState({singleEntity: e.target.value})}}/>
                        </Form.Field>
                      }
                      <Form.Field>
                        <label>Markup</label>
                        <Input placeholder="Markup" onChange={(e)=>{this.setState({markup: e.target.value})}}/>
                      </Form.Field>
                      <Button 
                        onClick={this.handleOwner}
                        primary
                        loading={this.state.loading}
                        content="Send"
                      />
                    </Form>
                  </Tab.Pane>
                
              },
              {
                menuItem: 'Sender',
                render:()=>
                  <Tab.Pane key='tab2'>
                    <Form>
                      {this.state.senderSingle ? <></> :
                        <Form.Field>
                          <label>Entity has access to Multiple Entity</label>
                          <Input placeholder="Single Entity Address" onChange={(e)=>{this.setState({singleEntity: e.target.value})}}/>
                        </Form.Field>
                      }
                      <Form.Field>
                        <label>Markup</label>
                        <Input placeholder="Markup" onChange={(e)=>{this.setState({markup: e.target.value})}}/>
                      </Form.Field>
                      <Button 
                        onClick={this.handleSender}
                        primary
                        loading={this.state.loading}
                        content="Send"
                      />
                    </Form>
                  </Tab.Pane>
                
              }
            ]
          } 
        />
      </Layout>
    );
  }
}

export default Storage;