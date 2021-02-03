import React, { Component } from 'react';
import { Button, Form, Message, Input, Dropdown } from 'semantic-ui-react';
import { Router } from '../../../../routes';
import Layout from '../../../../components/Layout_dNews';
import Newsid from '../../../../ethereum/dNews/Certificate';
//const ipfsClient = require('ipfs-http-client')

class ChildIndex extends Component {
  static async getInitialProps(props) {
    const { address ,address2} = props.query;
    const { type } = props.query;
    let show = (type == 1)?true:false;
    //這邊要從區塊練抓值下來
    //假資料
    let content;
    
    let numcheck = await Newsid.methods.indexlengthcheck(address2,address).call();
    content = await Newsid.methods.Check_Waiting_ChildContent(address2,address,numcheck).call();
    

    return { address, content, show,address2};
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
    console.log(this.props.show);
    try {
      

      Router.pushRoute(`/dNews/journalist/owner/Attest/${this.props.address}/${this.props.address2}`); //to ChildShow
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
          {console.log(this.props.content)}
        <br />
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>Editor address</h3>
            <Input
              value={this.props.content.jourAddr}
            />
          </Form.Field>
          <Form.Field>
            <h3>Referred Index</h3>
            <Input
              value={this.props.content.index}
            />
          </Form.Field>
          <Form.Field>
            <h3>Metadata/Info</h3>
            <Input
              value={this.props.content.metadata}
            />
          </Form.Field>
          <Form.Field>
            <h3>IPFS Hash</h3>
            <Input
              value={this.props.content.IPFS_Hash}
            />
            </Form.Field>
          <a >
            <Button
              disabled={this.props.show}
              loading={this.state.loading}
              content='Send'
              icon='upload'
              floated="right"
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