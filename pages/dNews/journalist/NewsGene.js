import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout_dNews';



class NewsGenerated extends Component {
  state = {
    selectedFile: null,
    ownedJour: '',
    jourAddr: '',
    jourMedia:'',
    jourMediaAddr:'',
    metadata:'',
    timestamp:'',
    errorMessage: '',
    loading: false
  };
/*
  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });
       try {
 
      const accounts = await web3.eth.getAccounts();

      // in Entity
      const user = await verify.methods.getUserEntity().call();
      console.log(user);
      const entityMinistry = new web3.eth.Contract(Entity.abi, '0xD884A1f1CCF5968C27B7054f560bfC588C8e37F0');
      console.log(entityMinistry);
      await entityMinistry.methods
        .newDataToSend(this.state.newMediaAddr, "schoolCertificate")
        .send({ from: accounts[0] });
      
      const index = await entityMinistry.methods
        .recentSendingIndex(this.state.newSchoolAddr)
        .call();
      //console.log(index);

      await entityMinistry.methods
        .addDataToSend("isSchool", "Yes", index)
        .send({ from: accounts[0] });

      await entityMinistry.methods
        .approveDataToSend(index)
        .send({ from: accounts[0] });


      // in Verify
      await verify.methods
        .addNewSchool(this.state.newMediaAddr, this.state.newMediaName)
        .send({ from: accounts[0] });

    //  Router.pushRoute(`/dNews/journalist/LoginPage`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };
*/
  render() {
    return (
      <Layout>
        <br />
          <Form.Field>
            <h3>Journalist Name</h3>
            <Input
              placeholder='the journalist name'
              value={this.state.ownedJour}
              onChange={event =>
                this.setState({ ownedJour: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>

          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Journalist Entity Address</h3>
            <Input
              placeholder='the journalist entity address (0x...)'
              value={this.state.jourAddr}
              onChange={event =>
                this.setState({ jourAddr: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <h3>Media Name</h3>
            <Input
              placeholder='the media name'
              value={this.state.jourMedia}
              onChange={event =>
                this.setState({ jourMedia: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>

          <Form.Field>
            <h3>Media Address</h3>
            <Input
              placeholder='the media entity address (0x...)'
              value={this.state.jourMediaAddr}
              onChange={event =>
                this.setState({ jourMediaAddr: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <h3>The news content publish time</h3>
            <Input
              placeholder='timestamp'
              value={this.state.timestamp}
              onChange={event =>
                this.setState({ timestamp: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>

          <Form.Field>
            <h3>metadata and related information</h3>
            <Input
              placeholder='any info'
              value={this.state.timestamp}
              onChange={event =>
                this.setState({ timestamp: event.target.value })}
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

export default NewsGenerated;