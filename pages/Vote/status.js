import React, { Component } from 'react';
import{Link}from '../../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {Card,Table} from 'react-bootstrap';
import ReactShadowScroll from 'react-shadow-scroll';
import web3 from '../../ethereum/web3'
import {Router}from '../../routes';
import vote from '../../ethereum/Vote/vote';

class Status extends Component {
    constructor(props) {
        super(props);
        this.state ={
          search : "",
          register : "",
          register_answer : "",
          loading : false,
          loading2: false,
          errorMessage:''
        };
        this.refresh_search = this.refresh_search.bind(this);
        this.search_register = this.search_register.bind(this);
    }
    static async getInitialProps(props){
        const{address,mb_addr} = props.query;
        console.log(address,mb_addr);
        const Vote_event = await vote(address);
        console.log(Vote_event);
        const stage = await Vote_event.methods.return_stage().call();
        console.log(stage);
        const option_length = await Vote_event.methods.return_options_length().call();
        console.log(option_length);
        const result = await Vote_event.methods.return_result().call();
        console.log(result);
        //console.log(Vote_event);
        let voter_list = await Vote_event.methods.return_msgsender_voter_list().call();
        console.log(voter_list);
        if(stage==4){
            let winner = await Vote_event.methods.return_winner().call();
            console.log(winner);
        }
        let time = await Vote_event.methods.return_time().call();
        let correct_time =[];
        for(let i = 0;i<4;i++) {
            console.log(time[i]);
            let a =await new Date(time[i]*1);
            console.log(a.toString());
            correct_time.push(a.toString());
        }
        console.log(correct_time);
        time = correct_time;
        var options = [];

        const stage_str =  (stage == 0)?"stage : Setup":
                           (stage == 1)?"stage : Register":
                           (stage == 2)?"stage : Vote":
                           (stage == 3)?"stage : Tally":
                           (stage == 4)?"stage : Finish":"stage : Setup";

        for (let index = 0; index < option_length; index++) {
            let temp = await Vote_event.methods.return_options(index).call();
            let arr = [];
            arr[0] = (index+1).toString();
            arr[1] = temp;
            arr[2] = result[index];
            options.push(arr);
        }
        if(stage==4)
            return{address,mb_addr,stage,result,options,stage_str,voter_list,winner,time};
        else 
            return{address,mb_addr,stage,result,options,stage_str,voter_list,time};
    }
    refresh_search(){
        if(this.state.search != "")
         Router.pushRoute(`/Vote/status/${this.state.search}`);
         //console.log(this.props.address);
     }
    search_register(){
        if(this.state.register == ""){
            this.setState({register_answer:""});
            return;
        }
        for (let index = 0; index < this.props.voter_list.length;index++){
            if(this.state.register == this.props.voter_list[index]){
                this.setState({register_answer:"Already Registered !"});
                this.setState({register:""});
                return;
            }
        }
        //console.log(this.state.register_answer);
        this.setState({register_answer : "Voter not found !"});
        this.setState({register:""});
        //this.setState({register_answer:""});
    }
    render() {
        return(
        <>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
         <Container>
         <Navbar bg="dark" variant="dark"style={{width:"100%"}}>
         <Navbar.Brand >Vote</Navbar.Brand>
         <Nav className="mr-auto">
                <Link route={"/Vote/home/"+ this.props.mb_addr }  ><a style={{color: "white", width:"100px"}}>Home</a></Link>
                <Link route={"/Vote/vote/"+this.props.mb_addr+"/"+this.props.address} ><a style={{color: "white", width:"100px"}}>Vote</a></Link>
                <Link route={"/Vote/index" }  ><a style={{color: "white", width:"100px"}}>Logout</a></Link>
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
                <Card.Subtitle className="mb-2 text-muted">{this.props.stage_str}</Card.Subtitle>
                <Card.Text>
                    View the latest 2020 presidential polls and head-to-head match-up between Joe Biden and Donald Trump. For more information, view cnn.com/election.
                </Card.Text>
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
                            <th>Register time</th>
                            <th>{(this.props.time !== undefined)?this.props.time[0]:""}</th>
                            <th>{(this.props.time !== undefined)?this.props.time[1]:""}</th>
                        </tr>
                        <tr>
                            <th>Vote time</th>
                            <th>{(this.props.time !== undefined)?this.props.time[2]:""}</th>
                            <th>{(this.props.time !== undefined)?this.props.time[3]:""}</th>
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
                <Retally stage = {this.props.stage} address = {this.props.address} mb_addr={this.props.mb_addr}></Retally>
                {/*<Button variant="primary" size="lg" style={{ margin:"auto"}}>
                     Retally button
                </Button>*/}
            </Card.Body>
        </Card>
      </Container>
        </>
    )
    }
}

class Retally extends Component{
    constructor(props) {
        super(props);
        this.state ={
            
        };
        this.go_tally = this.go_tally.bind(this);
      }
      async go_tally(){
            //0x42309f924237Bac662Af64965A2efAF8c08fE4d2
            const accounts = await web3.eth.getAccounts();
            const Vote_event =await vote(this.props.address);
            //console.log(web3.utils.fromAscii(hash));
            try{
                await Vote_event.methods.compute().send({from:accounts[0]});
                Router.pushRoute(`/Vote/status/${this.props.mb_addr}/${this.props.address}`);
            } catch (err) {
                alert(err.message);
            }
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
                     Retally button
                </Button>{' '}
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
                <Card.Subtitle className="mb-2 text-muted">Elected Candidate : {(this.props.stage==4)?this.props.winner:"wait for tally"} </Card.Subtitle>
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
                        {this.props.results.map(result => <tr><Vote_result_Unit details={result}></Vote_result_Unit></tr>)}
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
            {this.props.details.map(detail => <td>{detail}</td>)}
            </>
        )
    }
}
class Voter_listQQ extends Component{
    render(){
        //console.log(this.props.list);
        return(
            <>
            {this.props.list.map((item,index)=>
                <tr>
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