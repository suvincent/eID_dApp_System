// Should make it server-side rendering technique
import React, { Component } from 'react';
import{ Link, Router }from '../../../routes';
import Layout from '../../../components/EidUserLayout';
import { 
  Table, 
  Grid, 
  Label, 
  GridRow, 
  GridColumn, 
  Button, 
  Loader,
  Segment,
  Dimmer
 } from 'semantic-ui-react';

import SingleEntityFactory from '../../../ethereum/Eid/SingleEntityFactory';
import MultipleEntityFactory from '../../../ethereum/Eid/MultipleEntityFactory';
import {CopyToClipboard} from 'react-copy-to-clipboard';


class SingleElements extends Component {
    //{this.props.joins.map(item => <td>{item}</td>)}
    constructor(props) {
      super(props);
      
    }   
      render(){
        return (
          <>  
            <Table.Cell>{this.props.selfs[3]}</Table.Cell>
            <Table.Cell>{this.props.selfs[2]}</Table.Cell>
            <Table.Cell>
              {this.props.selfs[1].substring(0, 5) + '...'}
              <CopyToClipboard text ={this.props.selfs[1]}>
                <Label as='a' icon='copy' content='copy'></Label>
              </CopyToClipboard>
            </Table.Cell>
            <Table.Cell>
              {this.props.selfs[0].substring(0, 5) + '...'}
              <CopyToClipboard text ={this.props.selfs[0]}>
                <Label as='a' icon='copy' content='copy'></Label>
              </CopyToClipboard>
            </Table.Cell>
            
          </>
        );
      }
}

class MultipleElementsHelper extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      {this.props.selfs.substring(0, 5) + '...'}
      <CopyToClipboard text ={this.props.selfs}>
        <Label as='a' icon='copy' content='copy' position='right'></Label>
      </CopyToClipboard>
      </>
    );
  }
}

class MultipleElements extends Component {
  //{this.props.joins.map(item => <td>{item}</td>)}
  constructor(props) {
    super(props);
    
  }   
    render(){
      return (
        <>  
          <Table.Cell>{this.props.selfs[3]}</Table.Cell>
          <Table.Cell>{this.props.selfs[2]}</Table.Cell>
          <Table.Cell>
            {this.props.selfs[1].map(self => <Table.Row><MultipleElementsHelper selfs={self}></MultipleElementsHelper></Table.Row>)}
          </Table.Cell>
          <Table.Cell>
              {this.props.selfs[0].substring(0, 5) + '...'}
              <CopyToClipboard text ={this.props.selfs[0]}>
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
        errorMessage:'',
        singleList: [],
        multipleList: [],
        loadingList: true
      };
      
    }
    async componentDidMount(props){
      const singleListLength = await SingleEntityFactory.methods.entityLength().call();
      const multipleListLength = await MultipleEntityFactory.methods.entityLength().call();

      var singleList = [];
      var multipleList = [];
      for (let i = 0; i < singleListLength;i++){
        const item = await SingleEntityFactory.methods.Array(i).call();
        let arr = [];
        arr[0] = item[0]; //entity
        arr[1] = item[1]; //src
        arr[2] = item[2]; //description
        arr[3] = i+1;
        singleList.push(arr);
      }
      for (let i = 0; i < multipleListLength; i++){
        const item = await MultipleEntityFactory.methods.Array(i).call();
        let arr = [];
        arr[0] = item[0]; //entity
        arr[1] = await MultipleEntityFactory.methods.loadSource(i).call();; //src[]
        arr[2] = item[1]; //description
        arr[3] = i+1;
        multipleList.push(arr);
      }
      
      this.setState({
        singleList,
        multipleList,
        loadingList: false
      })

      //return{ singleList, multipleList };
    }
  
    render() {
      
        return(
          <>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
          <Layout>
          <div>
          <h2 style = {{marginBottom:"8px"}}>
            List 
          </h2>
            <Grid>
            
              <GridRow>
                <GridColumn width={8} >
                
                  <Link route="/Eid/List/CreateSingleEntity">
                    <a><Button
                      content='Create Single-controlled Entity'
                      primary={true}
                      />
                    </a>
                  </Link>
                  <Table margin="auto">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>#</Table.HeaderCell>
                        <Table.HeaderCell>description</Table.HeaderCell>
                        <Table.HeaderCell>src(EOA)</Table.HeaderCell>
                        <Table.HeaderCell>Entity</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {this.state.singleList.map(self => <Table.Row><SingleElements selfs={self}></SingleElements></Table.Row>)
                      }
                    </Table.Body>
                  </Table>
                </GridColumn>
                <GridColumn width={8}>
                  <Link route="/Eid/List/CreateMultipleEntity">
                    <a><Button
                      content='Create Multiple-controlled Entity'
                      primary={true}
                      />
                    </a>
                  </Link>
                  <Table margin="auto">
                    <Table.Header>
                      <Table.Row>
                      <Table.HeaderCell>#</Table.HeaderCell>
                      <Table.HeaderCell>description</Table.HeaderCell>
                      <Table.HeaderCell>src(s)(Entity)</Table.HeaderCell>
                      <Table.HeaderCell>Entity</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {this.state.multipleList.map(self => <Table.Row><MultipleElements selfs={self}></MultipleElements></Table.Row>)}
                    </Table.Body>
                  </Table>
                </GridColumn>
              </GridRow>
              <GridRow>
                <GridColumn width={8}>
                  <Loader active={this.state.loadingList} />
                </GridColumn>
                <GridColumn width={8}>
                  <Loader active={this.state.loadingList} />
                </GridColumn>
              </GridRow>
            </Grid>
        </div>
      </Layout>
      
         </>
    )
    }
}


export default List;