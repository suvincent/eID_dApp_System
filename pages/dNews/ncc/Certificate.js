import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout_dNews';
//import web3 from '../../../ethereum/academic/web3';
//import verify from '../../../ethereum/academic/verify';
//import Entity from '../../../ethereum/eid/build/Entity.json'

class AddIndex extends Component {
  state = {
    selectedFile: null,
    newMediaName: '',
    newMediaAddr: '',
    newRepresentativeName:'',
    newRepresentativeAddr:'',
    duedate:'',
    errorMessage: '',
    loading: false
  };

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

      Router.pushRoute(`/dNews/ncc/mediaList`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Add Qualified Media</h1>
        <Link route="/dNews/ncc/mediaList">
          <a>
            <Button
              floated="right"
              content='View All Qualified Medias'
              primary={true}
            />
          </a>
        </Link>
        <br />
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

          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Media Entity Address</h3>
            <Input
              placeholder='the media entity address (0x...)'
              value={this.state.newSchoolAddr}
              onChange={event =>
                this.setState({ newSchoolAddr: event.target.value })}
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
                this.setState({ newReoresentativeAddr: event.target.value })}
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