import React, { Component } from 'react';
import{Link}from '../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Card,Table} from 'react-bootstrap';
import factory from '../ethereum/Vote/factory';
import web3 from '../ethereum/web3'
import {Router}from '../routes';
class Index extends Component {
    constructor(props) {
      super(props);
      this.state ={
        loading : false,
        loading2: false,
        errorMessage:''
    };
      // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
      this.login = this.login.bind(this);
      this.create= this.create.bind(this);
    }
    async login(event){
      Router.pushRoute(`/Vote/index`);
    }
    async create(event){
      try{
        event.preventDefault();
        this.setState({loading2:true});
        var accounts = await web3.eth.getAccounts();
        let addr =await factory.methods.return_addr(accounts[0]).call();
        if(addr!='0x0000000000000000000000000000000000000000')Router.pushRoute(`/home/${addr}`);
        else {
          await factory.methods.create_mailbox().send({from:accounts[0]});
          let addr =await factory.methods.return_addr(accounts[0]).call();
          if(addr!=null)Router.pushRoute(`/home/${addr}`);
          else alert("somthing wrong please try again!");
          this.setState({loading2:false});
        }
      }
      catch(err){
        alert(err);
        this.setState({loading2:false});
      }
    }
    render() {
        return(
          <>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
          <Container>
          <Navbar bg="dark" variant="dark"style={{width:"100%"}}>
             <Navbar.Brand ><Link route="/vote/0x4CbCE152A771B089d1d82DccCA01253430194b10" ><a style={{color: "white", width:"100px"}}>Vote</a></Link></Navbar.Brand>
              <Nav className="mr-auto" style={{width:"50%" ,color:"white"}}>
                 Welcome to the vote website!
              </Nav>
         </Navbar>
         
         <div style={{margin:"auto"}}>
          <h2 style = {{margin:"auto",marginTop : "30%"}}>
            Go to Vote
          <Button variant="outline-info" style = {{width :'75%',margin:"auto",marginTop : "3%"}} onClick={this.login} loading={this.state.loading.toString()}>Login to your mailbox</Button>
          </h2>
          <h2 style = {{margin:"auto",marginTop : "30%"}}>
            Go to 
          <Button variant="outline-info" style = {{width :'75%',margin:"auto",marginTop : "3%"}} onClick={this.create} loading={this.state.loading2.toString()}>Create new mailbox</Button>
          </h2>

        </div>
       </Container>
         </>
    )
    }
}


export default Index;