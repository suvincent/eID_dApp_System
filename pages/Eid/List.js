//做一個頁面是沒有mailbox時要新增一個mailbox
import React, { Component } from 'react';
import{Link}from '../../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Card,Table} from 'react-bootstrap';

import web3 from '../../ethereum/web3'
import {Router}from '../../routes';
import Create_entity from '../../ethereum/Eid/createEntity';
class Self extends Component {
    //{this.props.joins.map(item => <td>{item}</td>)}
        constructor(props) {
          super(props);
          
        }
        
      render(){
        return (
          <>  
            <td>#</td>
            <td>{this.props.selfs[0]}</td>
            <td>{this.props.selfs[4]}</td>
            <td>{this.props.selfs[2]}</td>
            <td>{this.props.selfs[3]}</td>
            <td>{this.props.selfs[1]}</td>
            
          </>
        );
      }
  }
class List extends Component {
        constructor(props) {
          super(props);
          this.state ={
           // Mb_addr :props.query.address,
            search : "",
            addr:"",
            loading : false,
            loading2: false,
            errorMessage:''
          };
          
        }
        static async getInitialProps(props){
          //const Account_address = '0x7831Be043F6A66B7E77dD94B35a9b4F5C2C068B5';
          //const list = await Create_entity.methods.Array(0).call();
          const listLength = await Create_entity.methods.entityLength().call();
          //console.log(list[0]);
          var list = [];
          for (let i = 0; i < listLength;i++){
            const item = await Create_entity.methods.Array(i).call();
            let arr = [];
            arr[0] = item[0];
            arr[1] = item[1];
            arr[2] = item[2];
            arr[3] = item[3];
            arr[4] = item[4];
            console.log(arr);
            list.push(arr);
          }
          console.log(list);
          return{listLength,list};
        }
  
    render() {
      
        return(
          <>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
          <Container >
          <Navbar bg="dark" variant="dark"style={{width:"100%"}}>
             <Navbar.Brand >Vote</Navbar.Brand>
              <Nav className="mr-auto" style={{width:"50%"}}>
                 <Link route={"/Vote/index" }  ><a style={{color: "white", width:"100px"}}>Logout</a></Link>
              </Nav>
         </Navbar>
         {console.log(this.props.listLength)}
         <div style={{width: '100%'}}>
         <h2 style = {{width :'75%',margin:"auto",marginTop : "3%"}}>
            List 
                <Table striped bordered hover size="sm" style = {{width :'100%',margin:"auto",marginTop : "3%"}}>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>EOA</th>
                    <th>description</th>
                    <th>Validation</th>
                    <th>Entity</th>
                    <th>Registry</th>
                    </tr>
                </thead>
                <tbody >
                    {this.props.list.map(self => <tr><Self selfs={self}></Self></tr>)}
                </tbody>
                </Table>
        </h2>
        </div>
       </Container>
         </>
    )
    }
}


export default List;