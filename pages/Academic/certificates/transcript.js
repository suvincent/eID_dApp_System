import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import { Link } from '../../../routes';
import CourseRow from '../../../components/CourseRow';

class Transcript extends Component {
   renderRows() {
  //   return this.props.requests.map((request, index) => {
       return (
         <CourseRow 
  //         key={index}
  //         id={index}
  //         request={request}
  //         address={this.props.address}
  //         approversCount={this.props.approversCount}
         />
       );
  //   });
   }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>Transcript</h1>
        <Link route={"/Academic/certificates/success"}>
          <a>back</a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>CourseID</HeaderCell>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Grade</HeaderCell>
              <HeaderCell>Credit</HeaderCell>
              <HeaderCell>Semester</HeaderCell>
              <HeaderCell>End date</HeaderCell>
            </Row>
          </Header>
          {/* <Body> */}
            {/* {this.renderRows} */}
            <CourseRow />
          {/* </Body> */}
        </Table>
      </Layout>
    );
  }
}

export default Transcript;