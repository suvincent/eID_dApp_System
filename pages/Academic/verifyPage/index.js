import React, { Component } from 'react';
import { Button, Form, Input, Message, Confirm } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';
import Entity from '../../../ethereum/academic/build/Entity.json'

class getIndex extends Component {
    state = {
      studentEntity: '',
      schoolEntity: '',
      errorMessage: '',
      errorMessage_isSchool: '',
      errorMessage_graduted: '',
      errorMessage_expired: '',
      errorMessage_canceled: '',
      loading_verify: false,
      open: false
    }

  handleCancel = () => this.setState({ open: false });

  handleConfirm = async event => {
    event.preventDefault();
    this.setState({ open: false, loading_download: true });
    try {
      const IPFShash = await verify.methods.getIPFS(this.state.studentEntity, this.state.schoolEntity).call();
      window.open(`https://ipfs.io/ipfs/` + IPFShash);

    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading_download: false });
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading_verify: true, errorMessage: '' });
    try {
      const accounts = await web3.eth.getAccounts();
      
      const student = await new web3.eth.Contract(Entity.abi, this.state.studentEntity);
      const text = await student.methods.MarkupsSender(this.state.schoolEntity, "diploma").call();
      console.log(text);

      let flag_isSchool;
      let flag_graduted;
      let flag_expired;
      let flag_canceled;

      flag_isSchool = await verify.methods.verifyIsSchool(this.state.schoolEntity).call();
      console.log(flag_isSchool);
      //if (!flag_isSchool) throw "The School is NOT Certificated"
      if (!flag_isSchool) this.setState({ errorMessage_isSchool: "The School is NOT Certificated" })

      flag_graduted = await verify.methods.existence(this.state.studentEntity, this.state.schoolEntity).call();
      console.log(flag_graduted);
      //if (!flag_graduted) throw "The Student is Not Graduated"
      if (!flag_graduted) this.setState({ errorMessage_graduted: "The Student is Not Graduated" })
      
      flag_expired = await verify.methods.expired(this.state.studentEntity, this.state.schoolEntity).call();
      console.log(flag_expired);
      //if (!flag_expired) throw "The Certificate was Expired"
      if (!flag_expired) this.setState({ errorMessage_expired: "The Certificate was Expired" })

      flag_canceled = await verify.methods.verifyMarkup(this.state.studentEntity, this.state.schoolEntity).call();
      console.log(flag_canceled);
      //if (!flag_canceled) throw "The Certificate was Canceled"
      if (!flag_canceled) this.setState({ errorMessage_canceled: "The Certificate was Canceled" })

      if (!flag_isSchool || !flag_graduted || !flag_expired || !flag_canceled) throw "NOT Passed"

      this.setState( { open: true } );
    } catch (err) {
      this.setState({ errorMessage: err });
    }

    this.setState({ loading_verify: false });
  };

  render() {
    return (
      <Layout>
        <h1>Verify</h1>
        <Link route="/Academic/verifyPage/verifyCert">
          <a>
            <Button
              floated="right"
              content='Verify Certificate'
              primary={true}
            />
          </a>
        </Link>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Student Entity Address</h3>
            <Input
              placeholder='the student entity address (0x...)'
              value={this.state.studentEntity}
              onChange={event =>
                this.setState({ studentEntity: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <h3>School Entity Address</h3>
            <Input
              placeholder='the school entity address (0x...)'
              value={this.state.schoolEntity}
              onChange={event =>
                this.setState({ schoolEntity: event.target.value })}
              style={{ marginBottom: 10 }}
            />
          </Form.Field>
          <a>
            <Button
              loading={this.state.loading_verify}
              content='Verify Issuer'
              icon='check circle outline'
              primary={true}
            />
          </a>
          <Confirm
            style={{ whiteSpace: 'pre-wrap' }}
            open={this.state.open}
            content={`The graduated school of the student is verified!!!
You can download the student's certificate from IPFS`}
            confirmButton="Get Certificate"
            onCancel={this.handleCancel}
            onConfirm={this.handleConfirm}
          />
          {/* <Message error header="Oops!" content={this.state.errorMessage} /> */}
          <Message
            error
            header='The Verify is NOT Passed!!!'
            list={[
              this.state.errorMessage_isSchool,
              this.state.errorMessage_graduted,
              this.state.errorMessage_expired,
              this.state.errorMessage_canceled,
            ]}
          />
        </Form>
      </Layout>
    );
  }
}

export default getIndex;