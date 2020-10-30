import React, { Component } from 'react';
import { Button, Form, Input, Message, Confirm } from 'semantic-ui-react';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/Layout';
import web3 from '../../../ethereum/academic/web3';
import verify from '../../../ethereum/academic/verify';

class getIndex extends Component {
    state = {
      studentEntity: '',
      schoolEntity: '',
      errorMessage: '',
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

      let flag;

      flag = await verify.methods.verifyIsSchool(this.state.schoolEntity).call();
      console.log(flag);
      if (!flag) throw "The School is NOT Certificated"

      flag = await verify.methods.existence(this.state.studentEntity, this.state.schoolEntity).call();
      console.log(flag);
      if (!flag) throw "The Student is Not Graduated"
      
      flag = await verify.methods.expired(this.state.studentEntity, this.state.schoolEntity).call();
      console.log(flag);
      if (!flag) throw "The Certificate was Expired"

      flag = await verify.methods.verifyMarkup(this.state.studentEntity, this.state.schoolEntity).call();
      console.log(flag);
      if (!flag) throw "The Certificate was Canceled"

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
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
      </Layout>
    );
  }
}

export default getIndex;