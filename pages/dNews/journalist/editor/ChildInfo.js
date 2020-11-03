import React, { Component } from 'react';
import { Button, Form, Message, Input, Dropdown } from 'semantic-ui-react';
import { Link, Router } from '../../../../routes';
import Layout from '../../../../components/Layout_dNews';
import web3 from '../../../../ethereum/web3';
import Newsid from '../../../../ethereum/dNews/Certificate';
import Entity from '../../../../ethereum/academic/build/Entity.json'
//const ipfsClient = require('ipfs-http-client')

class ChildIndex extends Component {
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
      metadata: '',
      referindex: '',
      studentGraduate: '',
      owneraddr: '',
      errorMessage: '',
      ipfshash:'',
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
      const accounts = await web3.eth.getAccounts();
      const {ipfshash,metadata,referindex,owneraddr} = this.state;
      await Newsid.methods.ChildContentInfo(ipfshash,metadata,owneraddr,referindex).send({ from: accounts[0] });
      Router.pushRoute("/dNews/journalist/editor/"+this.state.owneraddr+"/"+accounts[0]+"/ChildShow/1"); //to ChildShow
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
            <h3>Referred Index</h3>
            <Input
              placeholder='insert referred index'
              value={this.state.referindex}
              onChange={event =>
                this.setState({ referindex: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Metadata/Info</h3>
            <Input
              placeholder='insert metadata/ info'
              value={this.state.metadata}
              onChange={event =>
                this.setState({ metadata: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>IPFS Hash</h3>
            <Input
              placeholder='insert ipfs hash'
              value={this.state.ipfshash}
              onChange={event =>
                this.setState({ ipfshash: event.target.value })}
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

export default ChildIndex;