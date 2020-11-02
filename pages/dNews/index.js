import React, { Component } from 'react';
import{Link}from '../../routes';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Router } from '../../routes';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loading2: false,
      loading3: false,
      loading4:false,
      errorMessage: ''
    };
    // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
    this.goReading = this.goReading.bind(this);
    this.goJour = this.goJour.bind(this);
    this.goMedia = this.goMedia.bind(this);
    this.goNcc = this.goNcc.bind(this);
  }
  async goReading(event) {
    Router.pushRoute(`/dNews/ReadingPage/newsList`);
  }
  async goJour(event) {
      Router.pushRoute(`dNews/journalist/LoginPage`);
  }
  async goMedia(event) {
    Router.pushRoute(`/dNews/media/LoginPage`);
  }
  async goNcc(event) {
    Router.pushRoute(`/dNews/ncc/LoginPage`);
  }
  async goEditor(event) {
    Router.pushRoute(`/dNews/journalist/Editor`);
  }
  async goOwner(event) {
    Router.pushRoute(`/dNews/journalist/Owner`);
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
            <Navbar.Brand >dNews</Navbar.Brand>
            <Nav className="mr-auto" style={{ width: "50%", color: "white" }}>
              Welcome to the dNews website!
            </Nav>
            <Link route={"/"}><a style={{color: "white"}}>Go to other services</a></Link>
          </Navbar>
          <div style={{ margin: "auto" }}>

            <h2 style={{ margin: "auto", marginTop: "10%" }}>
              Editor Request for Source Recording
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goEditor}
                loading={this.state.loading4.toString()}>
                Go to Send Request
              </Button>
            </h2>

            <h2 style={{ margin: "auto", marginTop: "10%" }}>
              Owner for Permission Granting
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goOwner}
                loading={this.state.loading4.toString()}>
                Go to Grant Permission
              </Button>
            </h2>

          </div>
        </Container>
      </>
    )
  }
}

export default Index;