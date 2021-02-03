import React, { Component } from 'react';
import { Button, Form, Input, Message } from 'semantic-ui-react';
import Layout from '../../../../components/Layout_dNews';
import web3 from '../../../../ethereum/web3';
import Newsid from '../../../../ethereum/dNews/Certificate';

class OwnerReq extends Component {
  state = {
    loading: false,
    loading2:false
  };
  
  static async getInitialProps(props) {
    const { address,index } = props.query;
    
    return { address ,index};
  }

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
        await Newsid.methods.GrantedPermission(flag,this.props.address,this.props.index).send({ from: accounts[0] });
      //Router.pushRoute(`/dNews/journalist/editor/${this.props.address}/EditorList/${this.props.index}/1`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    if(flag){
      this.setState({ loading: false, errorMessage: '' });
    }
    else{
        this.setState({ loading2: false, errorMessage: '' });
    }
  };

  render() {
    return (
      <Layout>
        <h1>Grant Permission or Deny</h1>
        <Form>
        <Form.Field>
            <h3>editor address</h3>
            <Input
              value={this.props.address}
            />
          </Form.Field>
          <Form.Field>
            <h3>Referred Index</h3>
            <Input
              value={this.props.index}
            />
          </Form.Field>
        </Form>
        <br />
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
          
        
      </Layout>
    );
  }
}

export default OwnerReq;