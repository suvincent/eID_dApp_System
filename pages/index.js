import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Card, Table, Image } from 'react-bootstrap';
import web3 from '../ethereum/web3'
import { Router } from '../routes';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
    // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
    this.goVote = this.goVote.bind(this);
    this.goAcademic = this.goAcademic.bind(this);
    this.gdNews = this.godNews.bind(this);
    this.goEid = this.goEid.bind(this);
  }
  async goVote(event) {
    const accounts = await web3.eth.getAccounts();
    Router.pushRoute(`/Vote/home/${accounts[0]}`);
  }
  async goAcademic(event) {
    Router.pushRoute(`/Academic/index`);
  }
  async goEid(event) {
    Router.pushRoute(`/Eid/index`);
  }
  async godNews(event) {
    Router.pushRoute(`/dNews/index`);
  }
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />

        <Container>
          <Navbar bg="dark" variant="dark" style={{ width: "100%" }}>
            <Navbar.Brand >E-Identity</Navbar.Brand>
            <Nav className="mr-auto" style={{ width: "50%", color: "white" }}>
              Welcome to the EID website!
            </Nav>
          </Navbar>

          <div style={{ margin: "auto" }}>
            <h2 style={{ margin: "auto", marginTop: "8%" }}>
              Go to Vote
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goVote}>
                Go to Vote
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "10%" }}>
              Go to Academic
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goAcademic}>
                Go to Academic
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "10%" }}>
              Go to dNews
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.godNews}>
                Go to dNews
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "10%" }}>
              Go to Entity Management
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goEid}>
                Go to Entity Management
              </Button>
            </h2>
          </div>
        </Container>
      </>
    )
  }
}

export default Index;