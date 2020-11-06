import React, { Component } from 'react';
import { Button, Form, Message, Input, Dropdown } from 'semantic-ui-react';
import { Link, Router } from '../../../../routes';
import Layout from '../../../../components/SchoolLayout';
import web3 from '../../../../ethereum/academic/web3';
import verify from '../../../../ethereum/academic/verify';
import Entity from '../../../../ethereum/academic/build/Entity.json'

class CancelIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  constructor (props) {
    super(props)
    this.state = {
      disable: true,
      studentAddr: '',
      markup: '',
      reason: '',
      controlAddr: '',
      errorMessage: '',
      loading: false
    }
  }

  onSubmit = async () => {
    this.setState({ 
      loading: true, 
      errorMessage: ''
    });
    
    try {
      const accounts = await web3.eth.getAccounts();

      // in Entity
      const access = await new web3.eth.Contract(Entity.abi, this.state.controlAddr);
      
      await access.methods.markupMultiple(this.props.address, this.state.studentAddr, this.props.address, 
                                          "diploma", "Canceled", false)
        .send({from: accounts[0]});

      //Router.pushRoute(`/Academic/school/${this.props.address}/students`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1 style={{ color: "#e60000" }}>！學校模式：註銷學生畢業證明！</h1>
        <h1>Cancel Certificates</h1>
        {/* <Link route={`/Academic/school/${this.props.address}/students`}>
          <a>
            <Button
              floated="right"
              content='View All Transcripts'
              primary={true}
            />
          </a>
        </Link> */}
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Entity to Control</h3>
            <Input
              placeholder='your entity address (0x...)'
              value={this.state.controlAddr}
              onChange={event =>
                this.setState({ controlAddr: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Student Entity Address</h3>
            <Input
              placeholder='the student entity address (0x...)'
              value={this.state.studentAddr}
              onChange={event =>
                this.setState({ studentAddr: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Cancel Reason</h3>
            <Input
              placeholder='reason'
              value={this.state.reason}
              onChange={event =>
                this.setState({ reason: event.target.value })}
            />
          </Form.Field>
          <a>
            <Button
              loading={this.state.loading}
              content='Cancel'
              icon='cancel'
              primary={true}
            />
          </a>
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
        <br /><br />
      </Layout>
    );
  }
}

export default CancelIndex;