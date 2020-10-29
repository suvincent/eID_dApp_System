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
    markup:''
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
    let single = await senderEntity.methods.isSingle().call();
    this.setState({inputAddress: src, senderSingle: single});
    let desLength = await this.props.entity.methods.descriptionLength(src).call();

    let des = [];
    for(let i=0; i<desLength; i++){
      let tmp = await this.props.entity.methods.descriptionsBySource(src, i).call();
      des[i] = {key:i, text:tmp, value:i};
    }
    this.setState({description: des});

    console.log(this.props.address, this.state.inputAddress, this.state.description);

  }

  handleDescription = async (e, { value }) => {
    let Keys = await this.props.entity.methods.keysOfData(this.state.inputAddress, this.state.description[value].text).call();
    Keys = Keys.split(", ");
    Keys = Keys.slice(1);
    console.log(Keys);

    let Values = [];
    let i;
    for(i=0; i<Keys.length; i++)
      Values[i] = await this.props.entity.methods.fetchValue(this.state.inputAddress, this.state.description[value].text, Keys[i]).call();
  
    console.log(Keys);
    console.log(Values);
    this.setState({values: Values});
    this.setState({keys:Keys});
    this.setState({inputDescription: this.state.description[value].text});

  }

  handleOwner = async () => {

  }

  handleSender = async () => {
    
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
        <Table>
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
        <Tab 
          menu={{ fluid: true, vertical: true, tabular: true }} 
          panes={
            [
              {
                menuItem: 'Owner',
                pane: (
                  <Tab.Pane key='tab1'>
                    <Form>
                      {this.props.ownerSingle ? <></> :
                        <Form.Field>
                          <label>Entity has access to Multiple Entity</label>
                          <Input placeholder="Single Entity" onChange={(e)=>{this.setState({singleEntity: e.target.value})}}/>
                        </Form.Field>
                      }
                      <Form.Field>
                        <label>Markup</label>
                        <Input placeholder="Markup" onChange={(e)=>{this.setState({markup: e.target.value})}}/>
                      </Form.Field>
                      <Button 
                        onClick={this.handleOwner}
                      />
                    </Form>
                  </Tab.Pane>
                )
              },
              {
                menuItem: 'Sender',
                pane: (
                  <Tab.Pane key='tab2'>
                    <Form>
                      {this.state.senderSingle ? <></> :
                        <Form.Field>
                          <label>Entity has access to Multiple Entity</label>
                          <Input placeholder="Single Entity" onChange={(e)=>{this.setState({singleEntity: e.target.value})}}/>
                        </Form.Field>
                      }
                      <Form.Field>
                        <label>Markup</label>
                        <Input placeholder="Markup" onChange={(e)=>{this.setState({markup: e.target.value})}}/>
                      </Form.Field>
                      <Button 
                        onClick={this.handleSender}
                      />
                    </Form>
                  </Tab.Pane>
                )
              }
            ]
          } 
        />
      </Layout>
    );
  }
}

export default Storage;