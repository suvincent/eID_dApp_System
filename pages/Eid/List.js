//做一個頁面是沒有mailbox時要新增一個mailbox
import React, { Component } from 'react';
import{Link}from '../../routes';
import Layout from '../../components/EidLayout';
import { Table, Button, Label} from 'semantic-ui-react';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import {Card} from 'react-bootstrap';

import web3 from '../../ethereum/web3'
import {Router}from '../../routes';
import Create_entity from '../../ethereum/Eid/createEntity';
import {CopyToClipboard} from 'react-copy-to-clipboard';
class Self extends Component {
    //{this.props.joins.map(item => <td>{item}</td>)}
    constructor(props) {
      super(props);
      
    }
        
        
      render(){
        return (
          <>  
            <Table.Cell>#</Table.Cell>
            <Table.Cell>
              {this.props.selfs[0].substring(0, 5) + '...'}
              <CopyToClipboard text ={this.props.selfs[0]}>
                <Label as='a' icon='copy' content='copy'></Label>
              </CopyToClipboard>
            </Table.Cell>
            <Table.Cell>{this.props.selfs[4]}</Table.Cell>
            <Table.Cell>
              {this.props.selfs[2].substring(0, 5) + '...'}
              <CopyToClipboard text ={this.props.selfs[2]}>
                <Label as='a' icon='copy' content='copy'></Label>
              </CopyToClipboard>
            </Table.Cell>
            <Table.Cell>
              {this.props.selfs[3].substring(0, 5) + '...'}
              <CopyToClipboard text ={this.props.selfs[3]}>
                <Label as='a' icon='copy' content='copy'></Label>
              </CopyToClipboard>
            </Table.Cell>
            <Table.Cell>
              {this.props.selfs[1].substring(0, 5) + '...'}
              <CopyToClipboard text ={this.props.selfs[1]}>
                <Label as='a' icon='copy' content='copy'></Label>
              </CopyToClipboard>
            </Table.Cell>
            
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
          <Layout>
          {console.log(this.props.listLength)}
          <div style={{width: '100%',}}>
          <h2 style = {{width :'100%',margin:"auto",marginTop : "3%"}}>
            List 
          </h2>
                <Table margin="auto">
                <Table.Header>
                    <Table.Row>
                    <Table.HeaderCell>#</Table.HeaderCell>
                    <Table.HeaderCell>EOA</Table.HeaderCell>
                    <Table.HeaderCell>description</Table.HeaderCell>
                    <Table.HeaderCell>Validation</Table.HeaderCell>
                    <Table.HeaderCell>Entity</Table.HeaderCell>
                    <Table.HeaderCell>Registry</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.props.list.map(self => <Table.Row><Self selfs={self}></Self></Table.Row>)}
                </Table.Body>
                </Table>
        
        </div>
      </Layout>
      
         </>
    )
    }
}


export default List;