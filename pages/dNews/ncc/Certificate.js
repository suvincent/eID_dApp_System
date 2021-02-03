import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout_dNews';
import web3 from '../../../ethereum/web3';
import Newsid from '../../../ethereum/dNews/Certificate';
import Entity from '../../../ethereum/Eid/build/Entity';
// import EntityFactory from '../../../ethereum/Eid/MultipleEntityFactory';

class AddIndex extends Component {
  state = {
    //selectedFile: null,
    newMediaName: '',
    newMediaAddr: '',
    newRepresentativeName:'',
    newRepresentativeAddr:'',
    duedate:'',
    // mediacertHash:'',
    errorMessage: '',
    controlAddr:'',
    loading: false
  };

  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();

      //in Entity
      const access = await new web3.eth.Contract(Entity.abi, this.state.controlAddr)// ncc 員工
      // this.setstate({ nccAddr: '0xBc11F9D23B8fdB11149706C2b66f5FbfC2092816' });
      
      await access.methods
        .newDataMultipleToSend(this.props.address, this.state.newMediaAddr, 
        "mediaCertificate", "isMedia", "Yes", true)
        .send({ from: account[0] });

      await Newsid.methods
         .mediaCert(this.state.newMediaName, this.state.newMediaAddr, 
          this.state.newRepresentativeName, this.state.newRepresentativeAddr, 
          this.state.duedate)
          .send({from: account[0]});

      Router.pushRoute(`/dNews/ncc/${this.props.address}/mediaList`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1 style={{color:'#e67300'}}> !NCC Mode: Add Qualified Media!</h1>
        <h1>Add Qualified Media</h1>
        <Link route={`/dNews/ncc/${this.props.address}/mediaList`}>
          <a>
            <Button
              floated="right"
              content='View All Qualified Medias'
              primary={true}
            />
          </a>
        </Link>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Media Name</h3>
            <Input
              placeholder='the media name'
              value={this.state.newMediaName}
              onChange={event =>
                this.setState({ newMediaName: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>

          
          <Form.Field>
            <h3>Media Entity Address</h3>
            <Input
              placeholder='the media entity address (0x...)'
              value={this.state.newMediaAddr}
              onChange={event =>
                this.setState({ newMediaAddr: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <h3>Representative Name</h3>
            <Input
              placeholder='the representative of the media name'
              value={this.state.newRepresentativeName}
              onChange={event =>
                this.setState({ newRepresentativeName: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>

          <Form.Field>
            <h3>Representative Entity Address</h3>
            <Input
              placeholder='the representative entity address (0x...)'
              value={this.state.newRepresentativeAddr}
              onChange={event =>
                this.setState({ newRepresentativeAddr: event.target.value })}
                style={{ marginBottom: 10 }}
            />
          </Form.Field>

          <Form.Field>
            <h3>The Media License Due Date</h3>
            <Input
              placeholder='due date'
              value={this.state.duedate}
              onChange={event =>
                this.setState({ duedate: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>

          <a>
            <Button
              loading={this.state.loading}
              content='Add'
              icon='add'
              primary={true}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default AddIndex;