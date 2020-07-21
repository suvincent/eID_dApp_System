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
         // Mb_addr :props.query.address,
          search : "",
          loading : false,
          loading2: false,
          errorMessage:''
        };
        this.refresh_search = this.refresh_search.bind(this);
    }
    static async getInitialProps(props){
        const{address,mb_addr} = props.query;
        const Vote_event =await vote(address);
        const stage = await Vote_event.methods.return_stage().call();
        const option_length = await Vote_event.methods.return_options_length().call();
        const result = await Vote_event.methods.return_result().call();
        //console.log(Vote_event);
        await Vote_event.methods.return_msgsender_voter_list().call();
        //let voter_list = [];
        
        //console.log(voter_list);
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

        return{address,mb_addr,stage,result,options,stage_str,voter_list};
    }
    refresh_search(){
        if(this.state.search != "")
         Router.pushRoute(`/Vote/status/${this.state.search}`);
         //console.log(this.props.address);
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
                <Link route={"/Vote/status/"+this.props.mb_addr+"/"+this.props.address} ><a style={{color: "white", width:"100px"}}>Vote</a></Link>
                <Link route={"/Vote/index" }  ><a style={{color: "white", width:"100px"}}>Logout</a></Link>
             </Nav>
            <Form inline style={{margin :"auto"}}>
            <div style={{color : "white"}} > inesrt your vote contract address here  -&gt;   </div>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" 
             value={this.state.search} 
             onChange = {event => this.setState({search:event.target.value})}/>
            <Button variant="outline-info" onClick={this.refresh_search}>Search</Button>
            </Form>
        </Navbar>
            
        <Card style={{ width: '46%' , margin: '1.5%' ,height: '30%' }}>
            <Card.Body>
                <Card.Title>Eligible Voters</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">voter quantity : 10</Card.Subtitle>
                
                <Form inline style={{margin :"auto"}}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                <Table responsive style={{'height': '200px',"width":"50%", 'overflowY':'scroll', 'display': 'block'}}>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Voting Address</th>
                        <th>Register or not</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <Voter_listQQ list ={this.props.voter_list}></Voter_listQQ>
                        {/*<tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>2</td>
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
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        </tr>*/}
                    </tbody>
                </Table>
                
            </Card.Body>
        </Card>
        <Card style={{ width: '46%' , margin: '1.5%'}}>
            <Card.Body>
                <Card.Title>Voting Illustration</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Vote address : {this.props.address}</Card.Subtitle>
                <Card.Text>
                    View the latest 2020 presidential polls and head-to-head match-up between Joe Biden and Donald Trump. For more information, view cnn.com/election.
                </Card.Text>
                
                
            </Card.Body>
        </Card>
        <Card style={{ width: '46%' , margin: '1.5%'}}>
            <Card.Body>
                <Card.Title>Voting result</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">The Vote result is shown below</Card.Subtitle>
                        <Vote_result results = {this.props.options} stage ={this.props.stage}></Vote_result>
                        
            </Card.Body>
        </Card>
        <Card style={{ width: '46%' , margin: '1.5%'}}>
            <Card.Body>
                <Card.Title>Retally</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">You can retally the vote for assuring the result</Card.Subtitle>
                <Retally stage = {this.props.stage}></Retally>
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
    //const vote_btn =function (stage ){
        render(){
        if(this.props.stage <=2 ) 
            return (
                <>
                <h3>Have not reach the stage can Vote</h3>
                <h3>Please wait for a while</h3>
                </>
            );
        else 
            return (
                <>
                <Button variant="primary" size="lg" style={{ margin:"auto"}}>
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
        if(this.props.stage <=3 ) 
            return (
                <>
                <h3>Have not reach the stage can Vote</h3>
                <h3>Please wait for a while</h3>
                </>
            );
        else 
            return (
                <>
                <Card.Subtitle className="mb-2 text-muted">Elected Candidate : Korean Fish</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Election Phase : {this.props.stage_str}</Card.Subtitle>
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
            {/*this.props.list.map(items=>
                <tr>
                <td>{(items[0]+1)}</td>
                <td>{items[1]}</td>
                <td>Yes</td>
                </tr>
            )*/}
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