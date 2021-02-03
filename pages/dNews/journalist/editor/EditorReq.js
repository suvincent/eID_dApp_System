import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../../routes';
import Layout from '../../../../components/Layout_dNews';
import web3 from '../../../../ethereum/web3';
import Newsid from '../../../../ethereum/dNews/Certificate';
import Entity from '../../../../ethereum/Eid/build/Entity';
import EntityFactory from '../../../../ethereum/Eid/MultipleEntityFactory';


class EditorReq extends Component {
  state = {
    owner:'',
    index:'',
    loading: false
  };
  
  static async getInitialProps(props) {
    const { address, media } = props.query;

    return { address, media };
  }

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      //console.log(accounts[0]);
      //console.log(this.state.owner,this.state.index)
      let flag = await Newsid.methods.jourLogin(this.props.address, this.props.media).call();
      if (!flag) throw "this entity is not journalist";
      await Newsid.methods.requestPermission(this.state.owner, this.state.index).send({ from: accounts[0] });
      Router.pushRoute(`/dNews/journalist/editor/${this.state.owner}/EditorList/${this.state.index}/0`);
    } catch (err) {
      this.setState({ errorMessage: err });
    }

    this.setState({ loading: false });
  };
  gotoList = ()=>{
    console.log("gotolist")
    Router.pushRoute(`/dNews/journalist/editor/${this.state.owner}/EditorList/${this.state.index}/0`);
  }
  render() {
    return (
      <Layout>
        <h1>Send Request to the News Owner</h1>
          
            <Button
              floated="right"
              content='View All the Requests Sent by Editors'
              primary={true}
              onClick={this.gotoList}
            />
          
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