/*import React, { Component } from 'react';
import { Button, Form, Input, Message, Table } from 'semantic-ui-react';
import Layout from '../../../components/Layout_dNews';
import SchoolRow from '../../../components/SchoolRow';
import Newsid from '../../../ethereum/dNews/Certificate';
import Entity from '../../../ethereum/eid/build/Entity.json';
import verify from '../../../ethereum/academic/verify';
import { Link } from '../../../routes';

class Requests extends Component {
  static async getInitialProps() {
    const requestCount = await verify.methods.getSchoolsCount().call();

    const schools = await Promise.all(
      Array(parseInt(schoolCount)).fill().map((element, index) => {
        return verify.methods.schools(index).call();
            })
    );

    console.log(schools);

    return { schools };
  }

  renderRows() {
    return this.props.schools.map((school, index) => {
      return (
        <SchoolRow 
          key={index}
          school={school}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>All the News Requests</h1>
        <Link route={"/dNews/journalist/EditorReq"}>
          <a>back</a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>News&ensp;Title</HeaderCell>
              <HeaderCell>Owner's&ensp;Entity&ensp;Address</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default Requests;
*/