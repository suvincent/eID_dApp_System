import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import { Link, Router } from '../../../../routes';
import Layout from '../../../../components/Layout_dNews';
class OwnerReq extends Component {
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
      Router.pushRoute(`/dNews/journalist/owner/Pd/${this.state.owner}/${this.state.index}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h1>Grant Permission or Deny</h1>
        {/* <Link route="/dNews/journalist/editor/EditorList">
          <a>
            <Button
              floated="right"
              content='View All the Requests Sent by Editors'
              primary={true}
            />
          </a>
        </Link> */}
        <br />

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Editor's Address</h3>
            <Input
              placeholder='enter editor address'
              value={this.state.owner}
              onChange={event =>
                this.setState({ owner: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>

          <Form.Field>
            <h3>Editor's News Index</h3>
            <Input
              placeholder='the index of Editr s News'
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

export default OwnerReq;