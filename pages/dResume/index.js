import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Router, Link } from '../../routes';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
    // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
    this.goVerify = this.goVerify.bind(this);
    this.goSchool = this.goSchool.bind(this);
    this.goMinistry = this.goMinistry.bind(this);
  }
  async goVerify(event) {
    Router.pushRoute(`/dResume/verifyPage/index`);
  }
  async goSchool(event) {
    Router.pushRoute(`/dResume/school/index`);
  }
  async goMinistry(event) {
    Router.pushRoute(`/dResume/ministry/login`);
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
            <Navbar.Brand >dResume</Navbar.Brand>
            <Nav className="mr-auto" style={{ width: "50%", color: "white" }}>
              Welcome to the dResume website!
            </Nav>
              <Link route="/">
                <a style={{ color: "white", float: "right" }}>
                  Go to HomePage
                </a>
              </Link>
          </Navbar>

          <div style={{ margin: "auto" }}>
            <h2 style={{ margin: "auto", marginTop: "15%" }}>
              Go to Verify Mode
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goVerify}>
                Go to Verify
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "15%" }}>
              Go to School Mode
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goSchool}>
                Go to school
              </Button>
            </h2>
            <h2 style={{ margin: "auto", marginTop: "15%" }}>
              Go to Ministry Mode
              <Button
                variant="outline-info"
                style={{ width: '75%', margin: "auto", marginTop: "3%" }}
                onClick={this.goMinistry}>
                Go to Ministry
              </Button>
            </h2>
          </div>
        </Container>
      </>
    )
  }
}

export default Index;