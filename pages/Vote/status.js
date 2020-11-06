import React, { Component } from 'react';
import{Link}from '../../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Card,Table,Spinner} from 'react-bootstrap';
import ReactShadowScroll from 'react-shadow-scroll';
import web3 from '../../ethereum/web3'
import {Router}from '../../routes';
import vote from '../../ethereum/Vote/vote';
import { NineCellLoading } from 'react-loading';
import { LoadingOverlay, Loader } from 'react-overlay-loader';

class Loading extends Component {
    render(){
        if(this.props.loading)return <NineCellLoading></NineCellLoading>;
        else return (<></>);
    }
}
class Status extends Component {
    constructor(props) {
        super(props);
        this.state ={
          vst : (props.vst == undefined)?new Date() : new Date(props.vst/1),
          vet : (props.vet == undefined)?new Date() : new Date(props.vet/1),
          search : "",
          register : "",
          register_answer : "",
          loading : false,
          loading2: false,
          errorMessage:''
        };
        // vst : (props.vst == undefined)?new Date() : new Date(props.vst/1),
        // vet : (props.vet == undefined)?new Date() : new Date(props.vet/1),
        this.refresh_search = this.refresh_search.bind(this);
        this.search_register = this.search_register.bind(this);
        this.load = this.load.bind(this);
    }
    static async getInitialProps(props){
        const{address,mb_addr} = props.query;
        //console.log(address,mb_addr);
        const Vote_event = await vote(address);
        const vst = await Vote_event.methods.times(0).call();
        const vet = await Vote_event.methods.times(1).call();
        const isSet = await Vote_event.methods.isSet().call();
        const current = new Date();
        var stage = 0;
        if(vst == undefined){
             stage = 0;
        }
        else {
            stage =   (!isSet)?0:
                      (current.getTime() < vst)? 1:
                      (current.getTime() < vet)? 2:3;
        }
        const option_length = await Vote_event.methods.options_num().call();
        //console.log(option_length);
        const result = await Vote_event.methods.return_result().call();
        
        const question = await Vote_event.methods.vote_question().call();
        //console.log(result);
        //console.log(Vote_event);
        let voter_list = await Vote_event.methods.return_msgsender_voter_list().call();
        //console.log(voter_list);
        var winner;
    
            winner = await Vote_event.methods.win_option().call();
            
        var time = [];
        //console.log(correct_time);
        time[0] = vst;
        time[1] = vet;
        var options = [];

        const stage_str =  (stage == 0)?"stage : Setup":
                           (stage == 1)?"stage : Wait for vote":
                           (stage == 2)?"stage : vote time": "stage : Tally";

        for (let index = 0; index < option_length; index++) {
            let temp = await Vote_event.methods.options(index).call();
            let arr = [];
            arr[0] = (index+1).toString();
            arr[1] = temp;
            arr[2] = result[index];
            options.push(arr);
        }
        //if(stage==4)
            return{address,mb_addr,stage,result,options,stage_str,voter_list,winner,time,vst,vet,question};
        //else 
        //    return{address,mb_addr,stage,result,options,stage_str,voter_list,time};
    }
    refresh_search(){
        if(this.state.search != "")
         Router.pushRoute(`/Vote/status/${this.props.mb_addr}/${this.state.search}`);
         //console.log(this.props.address);
     }
    async search_register(){
        if(this.state.register == ""){
            this.setState({register_answer:""});
            return;
        }
        for (let index = 0; index < this.props.voter_list.length;index++){
            if(this.state.register == this.props.voter_list[index]){
                const Vote_event = await vote(this.props.address);
                let voter_value =await Vote_event.methods.return_voter_vote_status(this.state.register).call();
                this.setState({register_answer:"Already Registered ! he/she voted to " + voter_value.toString()});
                this.setState({register:""});
                return;
            }
        }
        //console.log(this.state.register_answer);
        this.setState({register_answer : "Voter not found !"});
        this.setState({register:""});
        //this.setState({register_answer:""});
    }
    load(signal){
        this.setState({loading:signal});
    }
    render() {
        return(
        <>
        <div style={{backgroundColor: 'papayawhip'}}height="10000px" width="100%">
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
         <Container  >
         <Navbar bg="dark" variant="dark"style={{width:"100%"}}>
         <Navbar.Brand >Vote</Navbar.Brand>
         <Nav className="mr-auto">
                <Link route={"/Vote/home/"+ this.props.mb_addr }  ><a style={{color: "white", width:"100px"}}>Home</a></Link>
                <Link route={"/Vote/vote/"+this.props.mb_addr+"/"+this.props.address} ><a style={{color: "white", width:"100px"}}>Vote</a></Link>
                {/*<Link route={"/Vote/index" }  ><a style={{color: "white", width:"100px"}}>Logout</a></Link>*/}
             </Nav>
            <Form inline style={{margin :"auto"}}>
            <div style={{color : "white"}} > insert your vote contract address here  -&gt;   </div>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" 
             value={this.state.search} 
             onChange = {event => this.setState({search:event.target.value})}/>
            <Button variant="outline-info" onClick={this.refresh_search}>Search</Button>
            </Form>
        </Navbar>
            
        <Card style={{ width: '46%' , margin: '1.5%' ,height: '30%' }}>
            <Card.Body>
                <Card.Title>Eligible Voters</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">voter quantity : {this.props.voter_list.length}</Card.Subtitle>
                <Form inline style={{margin :"auto"}}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                            value={this.state.register} 
                            onChange = {event => this.setState({register:event.target.value})}/>
                        <Button variant="outline-info" onClick={this.search_register}>Search</Button>
                        <Card.Subtitle className="mb-2 text-muted" style={{marginTop :"1%",margin :"2%"}}>{this.state.register_answer}</Card.Subtitle>
                </Form>
                <Table responsive style={{'height': '200px',"width":"100%", 'overflowY':'scroll', 'display': 'block'}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Voting Address</th>
                        <th>Register or not</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <Voter_listQQ list ={this.props.voter_list}></Voter_listQQ>
                    </tbody>
                </Table>
                
            </Card.Body>
        </Card>
        <Card style={{ width: '46%' , margin: '1.5%'}}>
            <Card.Body>
                <Card.Title>Voting Illustration</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Vote address : {this.props.address}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Vote question : {this.props.question}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{this.props.stage_str}</Card.Subtitle>
                
                <Table responsive style={{'height': '200px',"width":"100%", 'overflowY':'scroll', 'display': 'block'}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Start time</th>
                        <th>End time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vote time</td>
                            <td>{this.state.vst.toString()}</td>
                            <td>{this.state.vet.toString()}</td>
                        </tr>
                    </tbody>
                </Table>
                
            </Card.Body>
        </Card>
        <Card style={{ width: '46%' , margin: '1.5%'}}>
            <Card.Body>
                <Card.Title>Voting result</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">The Vote result is shown below</Card.Subtitle>
                        <Vote_result results = {this.props.options} stage ={this.props.stage} winner={this.props.winner}
                                     stage_str={this.props.stage_str} address = {this.props.address} mb_addr={this.props.mb_addr}>
                        </Vote_result>
                        
            </Card.Body>
        </Card>
        <Card style={{ width: '46%' , margin: '1.5%'}}>
            <Card.Body>
                <Card.Title>Retally</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">You can retally the vote for assuring the result</Card.Subtitle>
                <Retally stage = {this.props.stage} address = {this.props.address} mb_addr={this.props.mb_addr} load={this.load}>
                </Retally>
                {/*<Button variant="primary" size="lg" style={{ margin:"auto"}}>
                     Retally button
                </Button>*/}
            </Card.Body>
        </Card>
      </Container>
      </div>
        </>
    )
    }
}

class Retally extends Component{
    constructor(props) {
        super(props);
        this.state ={
            loading : false,
            ECC_result:null,
        };
        this.go_tally = this.go_tally.bind(this);
        this.ECC_test = this.ECC_test.bind(this);
      }
      async go_tally(){
            //0x42309f924237Bac662Af64965A2efAF8c08fE4d2
            this.setState({loading:true});
            const accounts = await web3.eth.getAccounts();
            const Vote_event =await vote(this.props.address);
            //console.log(web3.utils.fromAscii(hash));
            try{
                let random_sum = 0;//起始值設多少???
                let random_end = 100;
                for(; random_sum <random_end;random_sum++){
                    let temp = await Vote_event.methods.checkECCMath(random_sum).call();
                    console.log(temp);
                    if(temp){
                        break;
                    }
                }
                await Vote_event.methods.tally(random_sum).send({from:accounts[0]});
                this.setState({loading:false});
                Router.pushRoute(`/Vote/status/${this.props.mb_addr}/${this.props.address}`);
            } catch (err) {
                this.setState({loading:false});
                alert(err.message);
            }
        }

        async ECC_test(){
            const Vote_event =await vote(this.props.address);
            let ECC = await Vote_event.methods.Mul(1000).call();
            this.setState({ECC_result:ECC});
        }

        render(){
        if(this.props.stage <=2 ) 
            return (
                <>
                <h3>Have not reach the stage can Tally</h3>
                <h3>Please wait for a while</h3>
                </>
            );
        else 
            return (
                <>
                <Button variant="primary" size="lg" style={{ margin:"auto"}} onClick={this.go_tally}>
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
                  <>Retally button</>}  
                </Button>
                <Button variant="primary" size="lg" style={{ margin:"auto"}} onClick={this.ECC_test}>
                    TEST
                </Button>
                {(this.state.ECC_result)?<><h3>{this.state.ECC_result[0]}</h3>
                <h3>{this.state.ECC_result[1]}</h3></>:<></>}
                
                </>
                
            );
        }
  };

class Vote_result extends Component{
    //const vote_btn =function (stage ){
        render(){
        //console.log(this.props.results);
        if(this.props.stage <3 ) 
            return (
                <>
                <h3>Have not reach the stage can Tally</h3>
                <h3>Please wait for a while</h3>
                </>
            );
        else 
            return (
                <>
                <Card.Subtitle className="mb-2 text-muted">Elected Candidate : {this.props.winner} </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{this.props.stage_str}</Card.Subtitle>
                <Table responsive>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Option's Name</th>
                        <th>Totol votes to the option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.results.map((result,index) => <tr key={index}><Vote_result_Unit details={result} ></Vote_result_Unit></tr>)}
                    </tbody>
                </Table>
                </>
            );
        }
  };
class Vote_result_Unit extends Component{
    render(){
        return(
            <>
            {this.props.details.map((detail,index) => <td key={index}>{detail}</td>)}
            </>
        )
    }
}
var array = [];
class Voter_listQQ extends Component{
    constructor(props) {
        super(props);
        this.state ={
            
        };
       
    }
    static async getInitialProps(props){
        const{address,mb_addr} = props.query;
        //let voter_value = await Vote_event.methods.return_voter_vote_status().call();
        return{address}
    }
    
    render(){
        //console.log(this.props.list);
        return(
            <>
            {this.props.list.map((item,index)=>
                <tr key={index}>
                <td>{index+1}</td>
                <td>{item}</td>
                <td>Yes</td>
                </tr>
            )}
            </>
        )
    }
}

export default Status;


/**暫時性垃圾
 * <Table responsive style={{'height': '200px',"width":"50%", 'overflowY':'scroll', 'display': 'block'}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>items</th>
                        <th>link</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>register or not</td>
                        <td>True</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Status</td>
                        <td>Vote</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Candidate 1</td>
                        <td><Card.Link href="#">policy</Card.Link></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
 */