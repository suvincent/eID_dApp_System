//做一個頁面是沒有mailbox時要新增一個mailbox
import React, { Component } from 'react';
import{Link}from '../../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Card,Table,Spinner} from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Label} from 'semantic-ui-react';

import web3 from '../../ethereum/web3'
import {Router}from '../../routes';
import mailbox from '../../ethereum/Vote/mailbox';
import vote from '../../ethereum/Vote/vote';
//const header = ["#", "vote name", "vote address", "due date", "link"];
class Join extends Component {
  //{this.props.joins.map(item => <td>{item}</td>)}
    render(){
      return (
        <>
          <td>{this.props.joins[0]}</td>
          <td>{this.props.joins[1]}</td>
          <td>
            <Link route={"/Vote/vote/"+this.props.mb_addr+"/"+this.props.joins[2]} ><a>{this.props.joins[2]}</a></Link>
            <CopyToClipboard text ={this.props.joins[2]}>
                <Label as='a' icon='copy' content=''></Label>
              </CopyToClipboard>
          </td>
          <td>{this.props.joins[3]}</td>
          <td><Link route={"/Vote/status/"+this.props.mb_addr+"/"+this.props.joins[4]} ><a>link</a></Link></td>
        </>
      );
    }
}
class Join_list extends Component{
  //const vote_btn =function (stage ){
      render(){
      return (
          <>
          {this.props.list.map(key => <tr><Join joins={key} mb_addr={this.props.mb_addr}></Join></tr>)}
          </>
      );
      }
};
class Self extends Component {
  //{this.props.joins.map(item => <td>{item}</td>)}
      constructor(props) {
        super(props);
        this.state ={
           loading : false,
         };
        this.next = this.next.bind(this);
      }
      async next(){
        const current_stage = this.props.selfs[4];
        const v_address = this.props.selfs[2];
        const accounts = await web3.eth.getAccounts();
        const Vote_event =await vote(v_address);
        this.setState({loading: true});
        /*
        if(current_stage == 0){//set up
          try{
          await Vote_event.methods.set_can_register().send({from:accounts[0]});
            Router.pushRoute(`/Vote/home/${this.props.mb_addr}`);
          }
          catch(err){
            alert(err);
          }
        }
        else*/ 
        if(current_stage == 0){//registry
          try{
            await Vote_event.methods.set_can_vote().send({from:accounts[0]});
              Router.pushRoute(`/Vote/home/${this.props.mb_addr}`);
            }
            catch(err){
              alert(err);
            }
        }
        else if(current_stage == 1){//vote
          try{
            await Vote_event.methods.set_can_tally().send({from:accounts[0]});
              Router.pushRoute(`/Vote/home/${this.props.mb_addr}`);
            }
            catch(err){
              alert(err);
            }
        }
        else {//tally and finish
          alert("current stage don't need other setting")
        }
        this.setState({loading: false});
      }
    render(){
      return (
        <>  
          <td>{this.props.selfs[0]}</td>
          <td>{this.props.selfs[1]}</td>
          <td>
            <Link route={"/Vote/vote/"+this.props.mb_addr+"/"+this.props.selfs[2]} ><a>{this.props.selfs[2]}</a></Link>
            
            <CopyToClipboard text ={this.props.selfs[2]} style ={{marginLeft:'10px'}}>
            <Button variant="outline-primary" >copy</Button>
            </CopyToClipboard>
          </td>
          <td>{this.props.selfs[3]}</td>
          <td><Button variant="primary" 
            onClick={this.next}>
              {(this.state.loading)?
                  <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading
                  </>
                  :
                  (this.props.selfs[4] == 0)?"Set Vote":
                  (this.props.selfs[4] == 1)?"Set Tally":
                  (this.props.selfs[4] == 2)?"Setting finish":
                  "Finish"}

              {/*(this.props.selfs[4] == 0)?"Set Register":
               (this.props.selfs[4] == 0)?"Set Vote":
               (this.props.selfs[4] == 1)?"Set Tally":
               (this.props.selfs[4] == 2)?"Setting finish":
              "Finish"*/}</Button></td>
          <td><Link route={"/Vote/status/"+this.props.mb_addr+"/"+this.props.selfs[2]} ><a>link</a></Link></td>
          <td><Link route={"/Vote/admin/"+this.props.mb_addr+"/"+this.props.selfs[2]} ><a>link</a></Link></td>
        </>
      );
    }
}
class Self_list extends Component{
  //const vote_btn =function (stage ){
      render(){
      return (
          <>
          {this.props.list.map(self => <tr><Self selfs={self} mb_addr={this.props.mb_addr}></Self></tr>)}
          </>
      );
      }
};
class Home extends Component {
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
          this.refresh_search = this.refresh_search.bind(this);
          this.create_vote = this.create_vote.bind(this);
          this.add_list = this.add_list.bind(this);
        }
        static async getInitialProps(props){
          //const{mbaddr} = props.query;
          const mb_addr = props.query.mb_addr;
          //const accounts = await web3.eth.getAccounts();
          const Mailbox = mailbox(mb_addr);
          console.log(mb_addr);
          let join = await Mailbox.methods.return_join_list().call();
          //console.log(join);
          //console.log(join.length);
          var join_detail = [];
          for (let index = 0; index < join.length; index++) {
            let arr = [];
            let v_addr = join[index];
            let v = vote(v_addr);
            arr[0] = (index+1).toString();
            arr[1] = await v.methods.return_question().call();
            arr[2] = v_addr;
            //let t = await v.methods.return_time().call();
            //console.log(t);
            arr[3] = "today";
            arr[4] = v_addr;
            join_detail[index]=arr;
          }
          
          let self = await Mailbox.methods.return_self_list().call();
          var self_detail =[];
          for (let index = 0; index < self.length; index++) {
            let arr =[];
            let v_addr = self[index];
            let v = vote(v_addr);
            arr[0] = (index+1).toString();
            arr[1] = await v.methods.return_question().call();
            arr[2] = v_addr;
            //arr[3] = await v.methods.return_time().call();
            arr[3] = "today";
            arr[4] = await v.methods.return_stage().call();//return stage 之後要set stage
            self_detail[index]=arr;
            
          }
          console.log(self);
          //console.log(join_detail);
          return{mb_addr,join_detail,self_detail};
      }
    refresh_search(){
       if(this.state.search != "")
        Router.pushRoute(`/Vote/vote/${this.props.mb_addr}/${this.state.search}`);
        //console.log(this.props.address);
    }
    async create_vote(){
        const accounts = await web3.eth.getAccounts();
        const Mailbox =await mailbox(this.props.mb_addr);
        this.setState({loading:true});
        try{
            await Mailbox.methods.create_vote().send({from:accounts[0]});
            Router.pushRoute(`/Vote/home/${this.props.mb_addr}`);
            this.setState({loading:false});
          }
          catch(err){
            this.setState({loading:false});
            alert(err);
          }
    }
    async add_list(){
      const accounts = await web3.eth.getAccounts();
      const Mailbox =await mailbox(this.props.mb_addr);
      this.setState({loading2:true});
      try{
        await Mailbox.methods.add_to_join_list(this.state.addr).send({from:accounts[0]});
        this.setState({loading2:false});
        Router.pushRoute(`/Vote/home/${this.props.mb_addr}`);
      }
      catch(err){
        this.setState({loading2:false});
        alert(err);
      }
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
             <Form inline>
              <div style={{color : "white"}} > inesrt your vote contract address here  -&gt;   </div>
              <FormControl type="text" placeholder="Search" className="mr-sm-2"
                  value={this.state.search} 
                  onChange = {event => this.setState({search:event.target.value})} />
              <Button variant="outline-info" onClick={this.refresh_search}>Search</Button>
              </Form>
         </Navbar>
         
         <div style={{width: '100%'}}>
         <h2 style = {{width :'75%',margin:"auto",marginTop : "3%"}}>
           Vote List (the vote you are invited)
           <Form inline>
              <h4> add vote contract address to list  -&gt;   </h4>
              <FormControl type="text" placeholder="add" className="mr-sm-2"
                  value={this.state.addr} 
                  onChange = {event => this.setState({addr:event.target.value})} />
              <Button variant="primary" onClick={this.add_list}>
              {(this.state.loading2)?
                  <>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading
                  </>
                  :
                  <>Add</>}
              </Button>
              </Form>
           </h2>
         <Table striped bordered hover size="sm" style = {{width :'75%',margin:"auto",marginTop : "3%"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>vote name</th>
              <th>vote address</th>
              <th>due date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody >
          <Join_list list={this.props.join_detail} mb_addr={this.props.mb_addr}></Join_list>
          </tbody>
        </Table>
        
        </div>
        <div style={{width: '100%'}}>
        <h2 style = {{width :'75%',margin:"auto",marginTop : "3%"}}>
          Vote Admin List (the vote you create)
          <Button variant="primary"  onClick={this.create_vote} >
            {(this.state.loading)?
            <>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
             Loading
            </>
            :
            <>create new vote</>}
            </Button>
        </h2>
        
         <Table striped bordered hover size="sm" style = {{width :'75%',margin:"auto",marginTop : "3%"}}>
          <thead>
            <tr>
              <th>#</th>
              <th>vote name</th>
              <th>vote address</th>
              <th>next step due date</th>
              <th>nextstep</th>
              <th>status</th>
              <th>set question</th>
            </tr>
          </thead>
          <tbody>
          <Self_list list={this.props.self_detail} mb_addr={this.props.mb_addr}></Self_list>
            {/* 
            <tr>
              <td>1</td>
              <td>should everyone wear mask on campus</td>
              <td>0x1234556778999888</td>
              <td>7/14</td>
              <td><Link route="/vote" >update setting</Link></td>
            </tr>
            <tr>
              <td>2</td>
              <td>should everyone wear mask on campus</td>
              <td>0x1234556778999888</td>
              <td>7/14</td>
              <td><Link route="/vote" >distribute vote contract</Link></td>
            </tr>
            <tr>
              <td>3</td>
              <td>should everyone wear mask on campus</td>
              <td>0x1234556778999888</td>
              <td>7/14</td>
              <td><Link route="/vote" >tally</Link></td>
            </tr>*/}
          </tbody>
        </Table>
        </div>
       </Container>
         </>
    )
    }
}


export default Home;