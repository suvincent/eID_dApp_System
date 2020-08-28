import React, { Component } from 'react';
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
      loading4: false,
      errorMessage: ''
    };
    // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
    this.goStorage = this.goStorage.bind(this);
    this.goReceive = this.goReceive.bind(this);
    this.goSend = this.goSend.bind(this);
    this.goList = this.goList.bind(this);
  }
  async goStorage(event) {
    Router.pushRoute(`/Eid/storage`);
  }
  async goReceive(event) {
    Router.pushRoute(`/Eid/receivePage/index`);
  }
  async goSend(event) {
    Router.pushRoute(`/Eid/sendPage/index`);
  }
  async goList(event) {
    Router.pushRoute(`/Eid/List`);
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
            <h2 style={{ margin: "auto", marginTop: "15%" }}>
              Go to Storage
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goStorage}
                loading={this.state.loading.toString()}>
                Go to Storage
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "15%" }}>
              Go to Receive
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goReceive}
                loading={this.state.loading2.toString()}>
                Go to Receive
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "15%" }}>
              Go to Send
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goSend}
                loading={this.state.loading3.toString()}>
                Go to Send
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "15%" }}>
              Go to List
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goList}
                loading={this.state.loading4.toString()}>
                Go to List
              </Button>
            </h2>
          </div>
        </Container>
      </>
    )
  }
}

export default Index;