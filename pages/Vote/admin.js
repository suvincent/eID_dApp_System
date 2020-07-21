import React, { Component,useState } from 'react';
import{Link}from '../../routes';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";

import web3 from '../../ethereum/web3'
import {Router}from '../../routes';
import vote from '../../ethereum/Vote/vote';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state ={
          register_start_date:new Date(),
          register_end_date:new Date(),
          vote_start_date:new Date(),
          vote_end_date:new Date(),
          requirement:'',
          question:'',
          option:'',
          loading : false,
          loading2: false,
          search:'',
          errorMessage:''
        };
      //console.log(props.query.address);//擷取這個網址的url那part的address(from routes??)  
      this.submit_setting = this.submit_setting.bind(this);
      this.submit_option = this.submit_option.bind(this);
      this.refresh_search = this.refresh_search.bind(this);
      //const [ register_start_date, setDate ] = useState(new Date());
      }
    static async getInitialProps(props){
        const{address,mb_addr} = props.query;
        return{address,mb_addr};
    }
    async submit_setting(event){
        event.preventDefault();

        const Vote = vote(this.props.address);

        const {register_start_date,register_end_date,vote_start_date,vote_end_date,requirement,question} = this.state;
        //console.log(this.state.register_end_date.getTime());
        //console.log(register_start_date);
        this.setState({loading:true,errorMessage:''});
        
        try{
            const accounts = await web3.eth.getAccounts();
            await Vote.methods.set_up_all(
                question,
                register_start_date.getTime(),
                register_end_date.getTime(),
                vote_start_date.getTime(),
                vote_end_date.getTime(),
                requirement
            ).send(
                {from:accounts[0]}
            );
            //Router.pushRoute(`/campaigns/${this.props.address}/requests`)
            alert("Setting Successfully")
        }catch(err){
            alert(err);
        }
        this.setState({loading:false});
    }
    async submit_option(event){
        event.preventDefault();

        const Vote = vote(this.props.address);

        const {option} = this.state;
        //console.log(this.state.register_end_date.getTime());
        //console.log(register_start_date);
        this.setState({loading2:true});
        
        try{
            const accounts = await web3.eth.getAccounts();
            await Vote.methods.set_up_options(
                
            ).send(
                {from:accounts[0]}
            );
            //Router.pushRoute(`/campaigns/${this.props.address}/requests`)
            alert("Setting Option Successfully")
        }catch(err){
            alert(err);
        }
        this.setState({loading:false});
    }
    refresh_search(){
        if(this.state.search != ""){
        Router.pushRoute(`/admin/${this.props.mb_addr}/${this.state.search}`);
        console.log(this.props.address);
        }
    }
    //還可能要有顯示目前option的功能
    render() {
        //const [date, setDate] = useState(new Date());
        return(
        <>
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/3.1.3/react-datepicker.min.css" integrity="sha512-Nc2rvPMo6xXLoInVUZRxo3qMVFCQ8o1PzK/9eGjutJvr0Y/PM6u4Gg5Rg3xO33jsAq9L4Uc/PM0bitnlOh0wpw==" crossorigin="anonymous" />
         <Container>
         <Navbar bg="dark" variant="dark"style={{width:"100%"}}>
            <Navbar.Brand ><Link route={"/vote/"+this.props.address } ><a style={{color: "white", width:"100px"}}>Vote</a></Link></Navbar.Brand>
             <Nav className="mr-auto" style={{width:"50%"}}>
                <Link route={"/home/"+this.props.address }><a style={{color: "white", width:"100px"}}>Home</a></Link>
                <Link route={"/status/"+this.props.address } ><a style={{color: "white", width:"100px"}}>Status</a></Link>
                <Link route={"/index" }  ><a style={{color: "white", width:"100px"}}>Logout</a></Link>
             </Nav>
            <Form inline>
            <div style={{color : "white"}} > inesrt your vote contract address here  -&gt;   </div>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                value={this.state.search} 
                onChange = {event => this.setState({search:event.target.value})} />
            <Button variant="outline-info" onClick={this.refresh_search}>Search</Button>
            </Form>
        </Navbar>
        <div style={{margin:"auto"}}>
        <Form style={{ margin :"auto",marginTop :"3%"}} onSubmit = {this.submit_setting}>
        <h2>Edit Setting</h2>
            <Form.Row>
                <Form.Group as="new_vote" controlId="Issue">
                <Form.Label>The Issue you want to vote</Form.Label>
                <Form.Control type="text" placeholder="Enter issue" 
                    value={this.state.question} 
                    onChange = {event => this.setState({question:event.target.value})} 
                />
                </Form.Group>

            </Form.Row>{/*
            <Form.Row>
                <Form.Group as="gap" controlId="gap">
                <Form.Label>gap time</Form.Label>
                <Form.Control type="number" placeholder="Enter gap time" />
                </Form.Group>
                <Form.Group as="entrance_fee" controlId="entrance_fee">
                <Form.Label>entrance fee</Form.Label>
                <Form.Control type="number" placeholder="entrance fee" />
                </Form.Group>
            </Form.Row>*/}
            <Form.Row>
                
                <Form.Group as="register_start_date" controlId="register_start_date">
                <Form.Label>register_start_date</Form.Label>
                <DatePicker selected={this.state.register_start_date} 
                            onChange={date => {this.setState({register_start_date: date})}}/>
                </Form.Group>
                <Form.Group as="register_end_date"  controlId="register_end_date">
                <Form.Label>register_end_date</Form.Label>
                <DatePicker selected={this.state.register_end_date} 
                            onChange={date => {this.setState({register_end_date: date})}} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                
                <Form.Group as="vote_start_date" controlId="vote_start_date">
                <Form.Label>vote_start_date</Form.Label>
                <DatePicker selected={this.state.vote_start_date} 
                            onChange={date => {this.setState({vote_start_date: date})}} />
                </Form.Group>
                <Form.Group as="vote_end_date"  controlId="vote_end_date">
                <Form.Label>vote_end_date</Form.Label>
                <DatePicker selected={this.state.vote_end_date} 
                            onChange={date => {this.setState({vote_end_date: date})}} />
                </Form.Group>
            </Form.Row>

            <Form.Row>
            <Form.Group as="requirement" controlId="requirement">
                <Form.Label>vote requirement</Form.Label>
                <Form.Control type="text" placeholder="Enter requirement" 
                    value={this.state.requirement} 
                    onChange = {event => this.setState({requirement:event.target.value})}
                />
                </Form.Group>
                    
            </Form.Row>

            <Button variant="primary" type="submit">
                Setting
            </Button>
        </Form>
        
        <Form style={{ margin :"auto",marginTop :"3%"}} onSubmit = {this.submit_setting}>
        <h2>Set options one by one</h2>
            <Form.Row>
                <Form.Group controlId="option">
                    <Form.Label>option</Form.Label>
                    <Form.Control type="text" placeholder="option" 
                        value={this.state.option} 
                        onChange = {event => this.setState({option:event.target.value})}
                    />
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
                Set options
            </Button>
            </Form>
            </div>
      </Container>
        </>
    )
    }
}


export default Admin;