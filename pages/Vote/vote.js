import React, { Component } from 'react';
import{Link}from '../../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Card,Spinner} from 'react-bootstrap';

import web3 from '../../ethereum/web3'
import {Router}from '../../routes';
import vote from '../../ethereum/Vote/vote';

const random = require('random');
const show_btn = function( stage ){
    if (stage > 1 ) return null;
    //console.log(stage);
    return (
        <div>this vote still needs setting please wait</div>
    );
};
class Register_btn extends Component{
//const register_btn =function ( stage ){
    constructor(props) {
        super(props);
        this.state ={
            registry_addr:""
        };
        this.register = this.register.bind(this);
      }
      async register(){
          //0x42309f924237Bac662Af64965A2efAF8c08fE4d2
        const accounts = await web3.eth.getAccounts();
        const Vote_event =await vote(this.props.address);
        let requirements = await Vote_event.methods.requirement().call();
        console.log(requirements);
        var hash = CryptoJS.SHA3("human", { outputLength: 256 }).toString();
        //console.log(web3.utils.fromAscii(hash));
        try{
            //await Vote_event.methods.register('0x'+hash,this.state.registry_addr).send({from:accounts[0]});
            await Vote_event.methods.register(requirements,this.state.registry_addr).send({from:accounts[0]});
            Router.pushRoute(`/Vote/vote/${this.props.mb_addr}/${this.props.address}`);
        } catch (err) {
            alert(err.message);
        }
    }
    render(){
    //console.log(this.props.stage );
    if (this.props.stage != 1 ) return null;
  
    return (
        <>
        <FormControl type="text" placeholder="enter Entity Address" className="mr-sm-2"
                value={this.state.registry_addr} 
                onChange = {event => this.setState({registry_addr:event.target.value})} />
        <Button variant="outline-info"style={{margin :"2%"}} onClick={this.register}>register</Button>
        </>
    );
    }
};
class Vote_btn extends Component{
    constructor(props) {
        super(props);
        this.state ={
            vote_value:0,
            registry_addr:"",
            loading:false
        };
        this.go_vote = this.go_vote.bind(this);
      }
    async go_vote(){
        console.log(this.state.registry_addr);
        const accounts = await web3.eth.getAccounts();
        const Vote_event =await vote(this.props.address);
        const exp = await Vote_event.methods.exponent().call();
        const M = await Vote_event.methods.m().call();
        console.log(exp);
        console.log("exponent");
        this.setState({loading:true});
        try{
            let temp = random.int(0, 100);
            console.log(temp);
            let v = Math.pow(parseInt(exp),parseInt(this.state.vote_value)*parseInt(M));
            console.log(v);
            console.log(temp+v);
            await Vote_event.methods.Go_Vote(temp,parseInt(temp+v),this.state.registry_addr).send({from:accounts[0]});
            this.setState({loading:false});
            alert('You have voted successfully');
            Router.pushRoute(`/Vote/home/${this.props.mb_addr}`);
        } catch (err) {
            this.setState({loading:false});
            alert(err.message);
        }
    }
    render(){
    if (this.props.stage != 2 ) return null;
  
    return (
        <>
        <Form style={{width:'40%', margin: 'auto', marginTop : "2%"}} >
        <Form.Group >
            <FormControl type="text" placeholder="enter Entity Address" className="mr-sm-3"
                style={{marginTop : "2%"}}
                value={this.state.registry_addr} 
                onChange = {event => this.setState({registry_addr:event.target.value})} />
            <Form.Control as="select" size="lg"  onChange = {event => this.setState({vote_value:event.target.value})} style={{marginTop : "2%"}}>
                
                {this.props.ops.map((op, index) => <option value={index}>{op}</option>)}
                {/*<option>Korean Fish</option>
                <option>Donald Trump</option>
                <option>Xi DADA</option>*/}
            </Form.Control>
        </Form.Group>
        <Button variant="outline-info"style={{margin :"2%"}}  onClick={this.go_vote}>
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
                  <>Vote</>}
        </Button>
        </Form>
        </>
    );
    }
};

class Votesss extends Component {
    constructor(props) {
        super(props);
        this.state ={
          search:"",
          loading : false,
          loading2: false,
          stage:'',
          search:'',
          errorMessage:'',
          html_test:null,
          mailbox_addr:''
        };
      //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??)  
      this.refresh_search = this.refresh_search.bind(this);
      }
    static async getInitialProps(props){
        const{address, mb_addr} = props.query;
        const Vote_event =await vote(address);
        const vst = await Vote_event.methods.times(0).call();
        const vet = await Vote_event.methods.times(1).call();
        const isSet = await Vote_event.methods.isSet().call();
        const current = new Date();
        const stage = (!isSet)?0:
                      (current.getTime() < vst)? 1:
                      (current.getTime() < vet)? 2:3;
        const question = await Vote_event.methods.vote_question().call();
        const option_length = await Vote_event.methods.options_num().call();
        
        const stage_str =  (stage == 0)?"stage : Setup":
                           (stage == 1)?"stage : Wait for vote":
                           (stage == 2)?"stage : vote time": "stage : Tally";
        var options = [];
        for (let index = 0; index < option_length; index++) {
            let temp = await Vote_event.methods.options(index).call();
            options.push(temp);
        }
        return{address,Vote_event,stage,option_length,stage_str,options,mb_addr,question};
    }
    refresh_search(){
        if(this.state.search != "")
        Router.pushRoute(`/Vote/vote/${this.state.search}`);
        //console.log(this.props.address);
    }
    render() {
        return(
        <>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
         
         <Container>
         <Navbar bg="dark" variant="dark"style={{width:"100%"}}>
            <Navbar.Brand >Vote</Navbar.Brand>
             <Nav className="mr-auto" style={{width:"50%"}}>
                <Link route={"/Vote/home/"+ this.props.mb_addr }  ><a style={{color: "white", width:"100px"}}>Home</a></Link>
                <Link route={"/Vote/status/"+this.props.mb_addr+"/"+this.props.address} ><a style={{color: "white", width:"100px"}}>Status</a></Link>
                {/*<Link route={"/Vote/index" }  ><a style={{color: "white", width:"100px"}}>Logout</a></Link>*/}
             </Nav>
            
        </Navbar>
        <div style={{width: '100%'}}>

        <Form inline style={{ width: '33%' , margin: 'auto' , marginTop : "2%"}}>
            <div style={{color : "black"}} > inesrt your vote contract address here  -&gt;   </div>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"
                value={this.state.search} 
                onChange = {event => this.setState({search:event.target.value})} />
            <Button variant="outline-info" onClick={this.refresh_search}>Search</Button>
            </Form>
        <Card style={{ width: '33%' , margin: 'auto' , marginTop : "2%"}}>
            <Card.Body>
                <Card.Title>Election</Card.Title>
                <Card.Text>
                    <h3>{this.props.question}</h3>
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">voter address : {this.props.address}</Card.Subtitle>
                <Card.Text>{this.props.stage_str}</Card.Text>
                {show_btn(this.props.stage)}
               {/* <Register_btn stage ={this.props.stage} address = {this.props.address} mb_addr={this.props.mb_addr}></Register_btn>*/}
                <Vote_btn stage ={this.props.stage} ops = {this.props.options} address = {this.props.address} mb_addr={this.props.mb_addr}></Vote_btn>
            </Card.Body>
        </Card>
        </div>
        <div style={{ width: '100%'}}>
        </div>
      </Container>
        </>
    )
    }
}


export default Votesss;