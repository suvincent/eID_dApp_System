import React, { Component } from 'react';
import { Button, Form, Message, Input, Dropdown } from 'semantic-ui-react';
import { Link, Router } from '../../../../routes';
import Layout from '../../../../components/Layout_dNews';
import web3 from '../../../../ethereum/academic/web3';
import Newsid from '../../../../ethereum/dNews/Certificate';
import Entity from '../../../../ethereum/academic/build/Entity.json'
//const ipfsClient = require('ipfs-http-client')



class Attest extends Component {
  static async getInitialProps(props) {
    const { address,address2 } = props.query;
    let numcheck = await Newsid.methods.indexlengthcheck(address2,address).call();
    let content = await Newsid.methods.Check_Waiting_ChildContent(address2,address,numcheck).call();
    return { address,content,address2 };
  }

  constructor (props) {
    super(props)
    this.state = {
    //   ipfs: ipfsClient("/ip4/127.0.0.1/tcp/5001"),
      IPFShash: '',
      cert_end_date: '',
      disable: true,
      
      errorMessage: '',
      info:'',
      loading: false,
      loading2:false
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
    console.log(this.state.IPFShash + "," + this.state.studentGraduate + "," + this.state.cert_end_date);
    try {
      

      Router.pushRoute("/dNews/journalist/editor/"+this.state.owneraddr+"/ChildShow/2"); //to ChildShow
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };


  click = async (flag)=>{
    if(flag){
      //contract
      console.log("permit")
      this.setState({ loading: true, errorMessage: '' });
    }
    else{
        //contract
        console.log("deny")
        this.setState({ loading2: true, errorMessage: '' });
    }
    try {
        const accounts = await web3.eth.getAccounts();
        const {content} = this.props;
        await Newsid.methods.Attestation(flag,content.IPFS_Hash,content.metadata,content.jourAddr,content.index).send({ from: accounts[0] });
      //Router.pushRoute(`/dNews/journalist/editor/${this.props.address}/EditorList/${this.props.index}/1`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    if(flag){
      this.setState({ loading: false, errorMessage: '' });
      alert("permit");
    }
    else{
        this.setState({ loading2: false, errorMessage: '' });
        alert("deny");
    }
  };


  render() {
    return (
      <Layout>
        {/* <br />
        <Link route="/dNews/journalist/editor/EditorList">
          <a>
            <Button
              floated="right"
              content='View All the Requests Sent by Editors'
              primary={true}
            />
          </a>
        </Link> */}
        <br />
        <Form  error={!!this.state.errorMessage}>
          <Form.Field>
            <h3>editor address</h3>
            <Input
              placeholder='owner entity address (0x...)'
              value={this.props.content.jourAddr}
              
            />
          </Form.Field>
          <Form.Field>
            <h3>Referred Index</h3>
            <Input
              placeholder='insert referred index'
              value={this.props.content.index}
            />
          </Form.Field>
          <Form.Field>
            <h3>Metadata</h3>
            <Input
              placeholder='insert metadata'
              value={this.props.content.metadata}
            />
          </Form.Field>
          <Form.Field>
            <h3>IPFS Hash</h3>
            <Input
              placeholder='insert ipfs hash'
              value={this.props.content.IPFS_Hash}
            />
          </Form.Field>
          <Form.Field>
            <h3>Info</h3>
          <Input
              placeholder='insert info'
              value={this.state.info}
              onChange={event =>
                this.setState({ info: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <h3>Result</h3>
            <a>
            <Button
              loading={this.state.loading}
              content='Permit'
              icon='send'
              primary={true}
              onClick={()=>{this.click(true)}}
            />
          </a>

          <a>
            <Button
              loading={this.state.loading2}
              content='Deny'
              icon='send'
              primary={true}
              onClick={()=>{this.click(false)}}
            />
          </a>
          </Form.Field>
          {/* <a>
            <Button
                display={false.toString()}
              loading={this.state.loading}
              content='Send'
              icon='upload'
              primary={true}
              onClick={this.onSubmit}
            />
          </a> */}
          <Message error header="Oops!" content={this.state.errorMessage} />
        </Form>
        <br /><br />
      </Layout>
    );
  }
}

export default Attest;