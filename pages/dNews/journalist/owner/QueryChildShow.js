import React, { Component } from 'react';
import { Button, Form, Message, Input, Dropdown } from 'semantic-ui-react';
import { Link, Router } from '../../../../routes';
import Layout from '../../../../components/Layout_dNews';
import web3 from '../../../../ethereum/academic/web3';
//import verify from '../../../../ethereum/academic/verify';
import Entity from '../../../../ethereum/academic/build/Entity.json'
//const ipfsClient = require('ipfs-http-client')

class QueryChildShow extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;

    return { address };
  }

  constructor (props) {
    super(props)
    this.state = {
    //   ipfs: ipfsClient("/ip4/127.0.0.1/tcp/5001"),
      IPFShash: '',
      cert_end_date: '',
      disable: true,
      editaddr: '',
      owneraddr: '',
      errorMessage: '',
      loading: false
    }

    // bind methods
    this.captureFile = this.captureFile.bind(this)
    this.saveToIpfs = this.saveToIpfs.bind(this)
    this.connect = this.connect.bind(this)
  }

  captureFile (event) {
    event.stopPropagation()
    event.preventDefault()
  
    this.saveToIpfs(event.target.files)
  }

  // Add file to IPFS and return a CID
  async saveToIpfs ([ file ]) {
    try {
      const added = await this.state.ipfs.add(
        file,
        {
          progress: (prog) => console.log(`received: ${prog}`)
        }
      )
      this.setState({ IPFShash: added.cid.toString() })
    } catch (err) {
      console.error(err)
    }
  }

  connect () {
    this.setState({
      ipfs: ipfsClient("/ip4/127.0.0.1/tcp/5001")
    })
  }

  handleChange = (e, { value }) => {
    if (value == 0) this.setState({ disable: false });
    else if (value == 1) 
      this.setState({ 
        disable: true,
        cert_end_date: '10000000000000'
      });
  }
  //////////send function
  onSubmit = async () => {
    this.setState({ 
      loading: true, 
      errorMessage: ''
    });
    try {
      Router.pushRoute("/dNews/journalist/editor/"+this.state.owneraddr+"/"+this.state.editaddr+"/ChildShow/2"); //to ChildShow
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Owner address</h3>
            <Input
              placeholder='owner entity address (0x...)'
              value={this.state.owneraddr}
              onChange={event =>
                this.setState({ owneraddr: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Editor address</h3>
            <Input
              placeholder='insert referred index'
              value={this.state.editaddr}
              onChange={event =>
                this.setState({ editaddr: event.target.value })}
            />
          </Form.Field>
          
          
          <a>
            <Button
                display={false.toString()}
              loading={this.state.loading}
              content='Send'
              icon='upload'
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

export default QueryChildShow;