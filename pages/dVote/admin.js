import React, { Component,useState } from 'react';
import{Link}from '../../routes';
import moment from 'moment';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import {Card,Table,Spinner} from 'react-bootstrap';
import DateTime from 'react-datetime';

import web3 from '../../ethereum/web3'
import {Router}from '../../routes';
import vote from '../../ethereum/Vote/vote';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state ={
          vote_start_date:(props.vote_q == "" || props.vote_q == undefined)?new Date():new Date(props.vst/1),
          vote_end_date:(props.vote_q == "" || props.vote_q == undefined)?new Date():new Date(props.vet/1),
          requirement_description:(props.vote_q == "" || props.vote_q == undefined)?"":props.rq,
          write_entity_address:(props.vote_q == "" || props.vote_q == undefined)?"":props.we,
          question:(props.vote_q == "" || props.vote_q == undefined)?"":props.vote_q,
          option:'',
          key:'',
          value:'',
          type:0,
          loading : false,
          loading2: false,
          loading3 : false,
          search:'',
          errorMessage:'',
          exponent:3,
          M:2
        };
      //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??) 
      console.log(props.vst); 
      console.log(this.state.vote_start_date);
      //console.log(props.rq_keys);
      this.submit_setting = this.submit_setting.bind(this);
      this.submit_option = this.submit_option.bind(this);
      this.refresh_search = this.refresh_search.bind(this);
      this.submit_requirement = this.submit_requirement.bind(this);
      }
    static async getInitialProps(props){//mbaddr現在是使用者addr
        const{address,mb_addr} = props.query;
        const Vote_event =await vote(address);
        const option_length = await Vote_event.methods.options_num().call();
        var options = [];
        for (let index = 0; index < option_length; index++) {
            let temp = await Vote_event.methods.options(index).call();
            options.push(temp);
        }
        const vote_q = await Vote_event.methods.vote_question().call();
        
        //const t = await Vote_event.methods.times(0).call();
        const vst = await Vote_event.methods.times(0).call();
        const vet = await Vote_event.methods.times(1).call();
        const rq = await Vote_event.methods.description().call();
        const we = await Vote_event.methods.write_entity_addr().call();
        const rq_length = await Vote_event.methods.return_requirements_length().call();
        var requirements = [];
        for (let index = 0; index < rq_length; index++) {
            var requirement = [];
            let temp = await Vote_event.methods.return_requirements_key(index).call();
            let value = await Vote_event.methods.return_requirements_rq(temp).call();
            let type = await Vote_event.methods.return_requirements_type(temp).call();
            requirement[0] = temp;
            requirement[1] = value;
            requirement[2] = type;
            requirements.push(requirement);
        }
        return{address,mb_addr,options,requirements,vote_q,vst,vet,rq,we};
    }
    async submit_setting(event){
        event.preventDefault();

        const Vote = vote(this.props.address);

        const {vote_start_date,vote_end_date,requirement_description,write_entity_address,question,exponent,M} = this.state;
        
        this.setState({loading:true,errorMessage:''});
        
        try{
            const accounts = await web3.eth.getAccounts();
            await Vote.methods.set_up_all(
                question,
                vote_start_date.getTime(),
                vote_end_date.getTime(),
                requirement_description,
                write_entity_address,
                exponent,
                M
            ).send(
                {from:accounts[0]}
            );
            alert("Setting Successfully");
            Router.pushRoute(`/dVote/admin/${this.props.mb_addr}/${this.props.address}`);
        }catch(err){
            alert(err);
        }
        this.setState({loading:false});
    }
    async submit_option(event){
        event.preventDefault();

        const Vote = vote(this.props.address);

        const {option} = this.state;
        
        console.log(option);
        this.setState({loading2:true});
        
        try{
            const accounts = await web3.eth.getAccounts();
            await Vote.methods.set_up_options(
                option.toString()
            ).send(
                {from:accounts[0]}
            );
            
            alert("Setting Option Successfully");
            Router.pushRoute(`/dVote/admin/${this.props.mb_addr}/${this.props.address}`);
        }catch(err){
            alert(err);
        }
        this.setState({loading2:false});
    }
    async submit_requirement(event){
        event.preventDefault();
        const Vote = vote(this.props.address);
        const {key, value,type} = this.state;

        console.log(this.state.type)
        let adjusted_value = (type == 0)?value:value.getTime().toString();
        console.log(adjusted_value);
        this.setState({loading3:true});
        
        try{
            const accounts = await web3.eth.getAccounts();
            await Vote.methods.set_up_requirement(
                key,
                adjusted_value,
                type
            ).send(
                {from:accounts[0]}
            );
            alert("Setting Requirement Successfully");
            Router.pushRoute(`/dVote/admin/${this.props.mb_addr}/${this.props.address}`);
        }catch(err){
            alert(err);
        }
        this.setState({loading3:false});
    }
    refresh_search(){
        if(this.state.search != ""){
        Router.pushRoute(`/dVote/admin/${this.props.mb_addr}/${this.state.search}`);
        console.log(this.props.address);
        }
    }
    //還可能要有顯示目前option的功能
    render() {
        //const [date, setDate] = useState(new Date());
        return(
        <>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/3.1.3/react-datepicker.min.css" integrity="sha512-Nc2rvPMo6xXLoInVUZRxo3qMVFCQ8o1PzK/9eGjutJvr0Y/PM6u4Gg5Rg3xO33jsAq9L4Uc/PM0bitnlOh0wpw==" crossOrigin="anonymous" />
         <Container>
         <Navbar bg="dark" variant="dark"style={{width:"100%"}}>
            <Navbar.Brand ><Link route={"/dVote/vote/"+this.props.mb_addr+"/"+this.props.address } ><a style={{color: "white", width:"100px"}}>dVote</a></Link></Navbar.Brand>
             <Nav className="mr-auto" style={{width:"50%"}}>
                <Link route={"/dVote/home/"+this.props.mb_addr }><a style={{color: "white", width:"100px"}}>Home</a></Link>
                <Link route={"/dVote/status/"+this.props.mb_addr+"/"+this.props.address } ><a style={{color: "white", width:"100px"}}>Status</a></Link>
                {/*<Link route={"/dVote/index" }  ><a style={{color: "white", width:"100px"}}>Logout</a></Link>*/}
             </Nav>
            <Form inline>
            <div style={{color : "white"}} > inesrt your vote contract address here  -&gt;   </div>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                value={this.state.search} 
                onChange = {event => this.setState({search:event.target.value})} />
            <Button variant="outline-info" onClick={this.refresh_search}>Search</Button>
            </Form>
        </Navbar>
        <div style={{marginLeft:"10%",marginTop:"2%",width:"24%",float:"left"}}>
        <Form style={{ margin :"auto",marginTop :"3%"}} onSubmit = {this.submit_setting}>
        <h2>Edit Setting</h2>
            <Form.Row>
                <Form.Group  controlId="Issue">
                <Form.Label>The Issue you want to vote</Form.Label>
                <Form.Control type="text" placeholder="Enter issue" 
                    value={this.state.question} 
                    onChange = {event => this.setState({question:event.target.value})} 
                />
                </Form.Group>

            </Form.Row>
            <Form.Row>
                <Form.Group as="vote_start_date" controlId="vote_start_date">
                <Form.Label>vote_start_date</Form.Label>
                <DateTime value={this.state.vote_start_date} 
                          onChange={date => {this.setState({vote_start_date: date.toDate()});}}></DateTime>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as="vote_end_date"  controlId="vote_end_date">
                <Form.Label>vote_end_date</Form.Label>
                <DateTime value={this.state.vote_end_date} 
                          onChange={date => {this.setState({vote_end_date: date.toDate()});}}></DateTime>
                </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group controlId="requirement">
                <Form.Label>vote requirement</Form.Label>
                <Form.Control type="text" placeholder="Enter requirement" 
                    value={this.state.requirement_description} 
                    onChange = {event => this.setState({requirement_description:event.target.value})}
                />
                </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group controlId="write_entity">
                <Form.Label>write_entity</Form.Label> 
                <Form.Control type="text" placeholder="Enter write_entity address" 
                    value={this.state.write_entity_address} 
                    onChange = {event => this.setState({write_entity_address:event.target.value})} 
                />
                </Form.Group>
                    
            </Form.Row>
            <Form.Row>
            <Form.Group controlId="exponent">
                <Form.Label>exponent</Form.Label> 
                <Form.Control type="text" placeholder="Enter a number for tally" 
                    value={this.state.exponent} 
                    onChange = {event => this.setState({exponent:event.target.value})} 
                />
                </Form.Group>
                    
            </Form.Row>
            <Form.Row>
            <Form.Group controlId="M">
                <Form.Label>M</Form.Label>
                <Form.Control type="text" placeholder="Enter a number for tally" 
                    value={this.state.M} 
                    onChange = {event => this.setState({M:event.target.value})} 
                />
                </Form.Group>
                    
            </Form.Row>
            <Form.Row>
                <Form.Label>
                    Result(adjust exponent and M to fit your Target voter quantity) : 
                </Form.Label>
            </Form.Row>
            <Form.Row>
                <Form.Label>{"at most "+Math.pow(this.state.exponent,this.state.M)+" people can join this vote"}</Form.Label>
            </Form.Row>
            <Button variant="primary" type="submit">
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
                  <>Setting</>}
            </Button>
        </Form>
        </div>
        <div style={{margin :"2%",float:"left",width:"24%"}}>
        <Form style={{ margin :"auto",marginTop :"3%"}} onSubmit = {this.submit_requirement}>
        <h2>Current requirements</h2>
            <Form.Row style = {{width :'100%',margin:"2%",marginTop : "3%"}}>
                <Form.Group controlId="option">
                    <Table  striped bordered hover size="sm" >
                        <thead>
                            <tr>
                                <td><h5>#</h5></td>
                                <td><h5>key</h5></td>
                                <td><h5>value</h5></td>
                                <td><h5>type</h5></td>
                            </tr>
                        </thead>
                                <tbody style={{width: '200px'}}>
                                    {this.props.requirements.map((requirement, index) =>
                                <tr key={index}> 
                                    <td>{index+1}</td>
                                    <td>{requirement[0]}</td>
                                    <td>{requirement[1]}</td>
                                    <td>{(requirement[2]== 0)?"=":
                                         (requirement[2]== 1)?">":
                                         (requirement[2]== 2)?"<":"error"}</td>
                                </tr>
                                
                                )}
                                </tbody>
                        
                    </Table>
                    <Form.Label>vote requirement key</Form.Label>
                    <Form.Control type="text" placeholder="requirement key" 
                        value={this.state.key} 
                        onChange = {event => this.setState({key:event.target.value})}
                    />
                    <Form.Label>vote requirement value</Form.Label>
                    {(this.state.type == 0)?<>
                    <Form.Control type="text" placeholder="requirement value" 
                        value={this.state.value} 
                        onChange = {event => this.setState({value:event.target.value})}
                    /></>:<>
                    <br/>
                    <Form.Label>
                        <DateTime value={this.state.value} 
                                onChange={date => {this.setState({value: date.toDate()});}}></DateTime>
                
                    </Form.Label>
                    <br/>
                    {(this.state.value)?this.state.value.getTime():""}
                    <br />
                    </>
                    }
                    
                    <Form.Label>vote requirement type</Form.Label>
                    {/* <Form.Control type="text" placeholder="requirement type" 
                        value={this.state.type} 
                        onChange = {event => this.setState({type:event.target.value})}
                    /> */}
                    <Form.Control as="select" size="lg"  onChange = {event => {this.setState({type:event.target.value,value:""});this.forceUpdate();console.log(this.state.type);}} style={{marginTop : "2%"}}>
                        <option value={0} key={0}>判斷相等 =</option>
                        <option value={1} key={1}>判斷大於{">"}</option>
                        <option value={2} key={2}>判斷小於{"<"}</option>
                    </Form.Control>
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" style = {{width :'230px',margin:"2%",marginTop : "3%"}} >
                {(this.state.loading3)?
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
                  <>Set requirements</>}
                
            </Button>
            </Form>
            </div>
        <div style={{marginLeft:"2%",marginRight:"10%",marginTop:"2%",width:"24%",float:"right"}}>
        <Form style={{ margin :"auto",marginTop :"3%"}} onSubmit = {this.submit_option}>
        <h2>Set options one by one</h2>
            <Form.Row>
                <Form.Group controlId="option">
                    
                    <Table  striped bordered hover size="sm" style = {{width :'100%',margin:"20%",marginTop : "3%"}}>
                        <thead>
                            <tr>
                                <td><h5>#</h5></td>
                                <td><h5>current option</h5></td>
                            </tr>
                        </thead>
                            <tbody style={{width: '200px'}}>
                                {this.props.options.map((option, index) =>
                                
                                <tr key={index}> 
                                    <td>{index+1}</td>
                                    <td>{option}</td>
                                </tr>
                                
                                )}
                            </tbody>
                        
                    </Table>
                    
                    <Form.Control type="text" placeholder="option" style = {{width :'100%',margin:"20%",marginTop : "3%"}}
                        value={this.state.option} 
                        onChange = {event => this.setState({option:event.target.value})}
                    />
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit" >
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
                  <>Set options</>}
                
            </Button>
            </Form>
            </div>
      </Container>
        </>
    )
    }
}


export default Admin;