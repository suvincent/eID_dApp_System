import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout_dNews';
import web3 from '../../../ethereum/web3';
import Newsid from '../../../ethereum/dNews/Certificate';
import Entity from '../../../ethereum/eid/build/Entity.json';
import EntityFactory from '../../../ethereum/Eid/MultipleEntityFactory';

class EditorReq extends Component {
  state = {
    owner:'',
    index:'',
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
      this.setstate({ nccAddr: '0xBc11F9D23B8fdB11149706C2b66f5FbfC2092816' });
      const access = await new web3.eth.Contract(Entity.abi, this.state.controlAddr); // ncc 員工
      const entityNCC = new web3.eth.Contract(Entity.abi, this.props.address); // '0xc42E18179B38b148487a07dF8092dF5a51F533B0'
      console.log(entityNCC);
/*
      await entityNCC.methods
        .newDataToSend(this.state.newMediaAddr, "mediaCertificate")
        .send({ from: accounts[0] });
    
      const index = await entityNCC.methods
        .recentSendingIndex(this.state.newMediaAddr)
        .call();
      //console.log(index);

      await entityNCC.methods
        .addDataToSend("isMedia", "Yes", index)
        .send({ from: accounts[0] });

      await entityNCC.methods
        .approveDataToSend(index)
        .send({ from: accounts[0] });

      await Newsid.methods
        .mediaCert(this.state.newMediaName, this.state.newMediaAddr, this.state.newRepresentativeName, this.state.newRepresentativeNameAddr, this.state.duedate)
        .send({ from: accounts[0] });
*/
      //Router.pushRoute(`/dNews/journalist/RequestList`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Send Request to the News Owner</h1>
        <Link route="/dNews/journalist/EditorList">
          <a>
            <Button
              floated="right"
              content='View All the Requests Sent by Editors'
              primary={true}
            />
          </a>
        </Link>
        <br />

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Owner's Address</h3>
            <Input
              placeholder='enter owner s address'
              value={this.state.owner}
              onChange={event =>
                this.setState({ owner: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>

          <Form.Field>
            <h3>Owner's News Index</h3>
            <Input
              placeholder='the index of Owner s News'
              value={this.state.index}
              onChange={event =>
                this.setState({ index: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>

          <a>
            <Button
              loading={this.state.loading}
              content='Send'
              icon='send'
              primary={true}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default EditorReq;