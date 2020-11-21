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
import factory from '../../ethereum/Vote/factory';
import vote from '../../ethereum/Vote/vote';
//const header = ["#", "vote name", "vote address", "due date", "link"];
class Join extends Component {
  //{this.props.joins.map(item => <td>{item}</td>)}
    constructor(props) {
      super(props);
      this.state ={
        loading : false,
        state : (!props.joins[5])?0:
                (props.current < props.joins[3])? 1 :
                (props.current < props.joins[4])? 2 : 3,
          t1 : (!props.joins[5])? new Date(): new Date(props.joins[3]/1),
          t2 : (!props.joins[5])? new Date(): new Date(props.joins[4]/1)
      };
    }
    render(){
      return (
        <>
          <td>{this.props.joins[0]}</td>
          <td>{this.props.joins[1]}</td>
          <td>
            <Link route={"/dVote/vote/"+this.props.mb_addr+"/"+this.props.joins[2]} ><a>{this.props.joins[2]}</a></Link>
            <CopyToClipboard text ={this.props.joins[2]}>
                <Label as='a' icon='copy' content=''></Label>
              </CopyToClipboard>
          </td>
          <td>{   (this.state.state == 0)?"Setting not finish":
                  (this.state.state == 1)?this.state.t1.toString():
                  (this.state.state == 2)?this.state.t2.toString():
                  "Vote Finish"}</td>
          <td><Link route={"/dVote/status/"+this.props.mb_addr+"/"+this.props.joins[2]} >
            <a>
                 {(this.state.state == 0)?"Setting":
                  (this.state.state == 1)?"Wait for Vote":
                  (this.state.state == 2)?"Vote time":
                  "Vote finish"}
            </a>
          </Link></td>
        </>
      );
    }
}
class Join_list extends Component{
  //const vote_btn =function (stage ){
      render(){
      return (
          <>
          {this.props.list.map((key, index) => <tr key={index}><Join joins={key} mb_addr={this.props.mb_addr} current={this.props.current}></Join></tr>)}
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
           state : (!props.selfs[5])?0:
                   (props.current < props.selfs[3])? 1 :
                   (props.current < props.selfs[4])? 2 : 3,
            t1 : (!props.selfs[5])? new Date(): new Date(props.selfs[3]/1),
            t2 : (!props.selfs[5])? new Date(): new Date(props.selfs[4]/1)
         };
         console.log(this.state.t1);
        this.next = this.next.bind(this);
      }
      async next(){
        const current_stage = this.state.state;
        const v_address = this.props.selfs[2];
        const accounts = await web3.eth.getAccounts();
        const Vote_event =await vote(v_address);
        this.setState({loading: true});
        /*
        if(current_stage == 0){//set up
          try{
          await Vote_event.methods.set_can_register().send({from:accounts[0]});
            Router.pushRoute(`/dVote/home/${this.props.mb_addr}`);
          }
          catch(err){
            alert(err);
          }
        }
        else*/ 
        if(current_stage == 0){//完成投票設定
          try{
            await Vote_event.methods.SetFinish().send({from:accounts[0]});
              Router.pushRoute(`/dVote/home/${this.props.mb_addr}`);
            }
            catch(err){
              alert(err);
            }
        }
        else if(current_stage == 1){//完成投票設定但還沒到投票時間
          alert("Lets wait for vote time start!")
        }
        else if(current_stage == 2){//投票時間還沒結束
          alert("Lets wait for vote time End!")
        }
        else {//可計票
          alert("現在可以開始計票了")
        }
        this.setState({loading: false});
      }
    render(){
      return (
        <>  
          <td>{this.props.selfs[0]}</td>
          <td>{this.props.selfs[1]}</td>
          <td width="40%">
            <Link route={"/dVote/vote/"+this.props.mb_addr+"/"+this.props.selfs[2]} ><a>{this.props.selfs[2]}</a></Link>
            
            <CopyToClipboard text ={this.props.selfs[2]} style ={{marginLeft:'10px'}}>
            <Button variant="outline-primary" >copy</Button>
            </CopyToClipboard>
          </td>
          <td width="15%">{   (this.state.state == 0)?"Setting not finish":
                  (this.state.state == 1)?this.state.t1.toString():
                  (this.state.state == 2)?this.state.t2.toString():
                  "Vote Finish"}</td>
          <td width="5%"><Button variant="primary" 
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
                  (this.state.state == 0)?"Set Vote":
                  (this.state.state == 1)?"Wait for Vote":
                  (this.state.state == 2)?"Wait for tally":
                  "Finish"}

              {/*(this.props.selfs[4] == 0)?"Set Register":
               (this.props.selfs[4] == 0)?"Set Vote":
               (this.props.selfs[4] == 1)?"Set Tally":
               (this.props.selfs[4] == 2)?"Setting finish":
              "Finish"*/}</Button></td>
          <td><Link route={"/dVote/status/"+this.props.mb_addr+"/"+this.props.selfs[2]} ><a>link</a></Link></td>
          <td><Link route={"/dVote/admin/"+this.props.mb_addr+"/"+this.props.selfs[2]} ><a>link</a></Link></td>
        </>
      );
    }
}
class Self_list extends Component{
  //const vote_btn =function (stage ){
      render(){
      return (
          <>
          {this.props.list.map((self,index) => <tr key={index}><Self selfs={self} mb_addr={this.props.mb_addr} current={this.props.current}></Self></tr>)}
          </>
      );
      }
};
class Home extends Component {
        constructor(props) {
          super(props);
          this.state ={
           // Mb_addr :props.query.address,
            current: new Date(),
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
          const mb_addr = props.query.mb_addr;
          console.log(mb_addr);
          let join = await factory.methods.return_join_list(mb_addr).call();
          var join_detail = [];
          for (let index = 0; index < join.length; index++) {
            let arr = [];
            let v_addr = join[index];
            let v = vote(v_addr);
            let isSet = await v.methods.isSet().call();
            arr[0] = (index+1).toString();
            arr[1] = await v.methods.vote_question().call();
            arr[2] = v_addr;
            //let t = await v.methods.return_time().call();
            //console.log(t);
            arr[3] = await v.methods.times(0).call();
            arr[4] = await v.methods.times(1).call();//return stage 之後要set stage
            arr[5] = isSet;
            join_detail[index]=arr;
          }
          
          let self = await factory.methods.return_self_list(mb_addr).call();
          var self_detail =[];
          for (let index = 0; index < self.length; index++) {
            let arr =[];
            let v_addr = self[index];
            let v = vote(v_addr);
            let isSet = await v.methods.isSet().call();
            arr[0] = (index+1).toString();
            arr[1] = await v.methods.vote_question().call();
            arr[2] = v_addr;
            //arr[3] = await v.methods.return_time().call();
            arr[3] = await v.methods.times(0).call();
            arr[4] = await v.methods.times(1).call();//return stage 之後要set stage
            arr[5] = isSet;
            
            self_detail[index]=arr;
            
          }
          console.log(self);
          //console.log(join_detail);
          return{mb_addr,join_detail,self_detail};
      }
    componentDidMount() { this.timerID = setInterval( () => this.tick(), 1000 ); } 
    componentWillUnmount() { clearInterval(this.timerID); } 
    tick() { this.setState({ current: new Date() }); }
    refresh_search(){
       if(this.state.search != "")
        Router.pushRoute(`/dVote/vote/${this.props.mb_addr}/${this.state.search}`);
        //console.log(this.props.address);
    }
    async create_vote(){
        const accounts = await web3.eth.getAccounts();
        this.setState({loading:true});
        try{
            await factory.methods.create_vote(this.props.mb_addr).send({from:accounts[0]});
            Router.pushRoute(`/dVote/home/${this.props.mb_addr}`);
            this.setState({loading:false});
          }
          catch(err){
            this.setState({loading:false});
            alert(err);
          }
          this.setState({loading:false});
    }
    async add_list(){
      const accounts = await web3.eth.getAccounts();
      this.setState({loading2:true});
      try{
        await factory.methods.add_to_join_list(this.state.addr,this.props.mb_addr).send({from:accounts[0]});
        this.setState({loading2:false});
        Router.pushRoute(`/dVote/home/${this.props.mb_addr}`);
      }
      catch(err){
        this.setState({loading2:false});
        alert(err);
      }
      this.setState({loading2:false});
    }
    render() {
      
        return(
          <>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
          <Container >
          <Navbar bg="dark" variant="dark"style={{width:"100%"}}>
             <Navbar.Brand >dVote</Navbar.Brand>
              <Nav className="mr-auto" style={{width:"50%"}}>
              <Link route={"/"}><a style={{color: "white"}}>Go to other services</a></Link>
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
          <Join_list list={this.props.join_detail} mb_addr={this.props.mb_addr} current={this.state.current}></Join_list>
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
          <Self_list list={this.props.self_detail} mb_addr={this.props.mb_addr} current={this.state.current}></Self_list>
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